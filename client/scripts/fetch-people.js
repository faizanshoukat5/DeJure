// Node script to fetch people page and download images
// Usage: npm run fetch:people

const path = require('path');
const fs = require('fs-extra');
const axios = require('axios');
const cheerio = require('cheerio');

const PEOPLE_URL = 'https://dejure.pk/people/';
const OUT_IMG_DIR = path.join(__dirname, '..', 'public', 'assets', 'people');
const OUT_DATA = path.join(__dirname, '..', 'src', 'data', 'people.json');

async function fetchHTML(url) {
  const { data } = await axios.get(url, { headers: { 'User-Agent': 'DeJure-Sync/1.0' } });
  return data;
}

async function downloadImage(url, outPath) {
  const res = await axios.get(url, { responseType: 'arraybuffer' });
  await fs.outputFile(outPath, res.data);
}

function cleanText(s) {
  return s.replace(/\s+/g, ' ').trim();
}

async function parsePeople(html) {
  const $ = cheerio.load(html);
  const people = [];

  // Try common Elementor containers
  const $root = $('.elementor, #content, .site-main').first();

  // Heuristic: find headings that look like names and collect following paragraphs and nearest image
  $root.find('h1,h2,h3,h4,h5').each((_, el) => {
    const nameRaw = cleanText($(el).text());
    if (!nameRaw) return;
    // Skip generic headings
    const looksLikeName = /[A-Za-z]{2,}/.test(nameRaw) && nameRaw.length <= 80;
    if (!looksLikeName) return;

    // Title may be in parentheses within the heading
    let name = nameRaw;
    let title = '';
    const m = nameRaw.match(/^(.*?)(?:\s*\((.*?)\))?:?$/);
    if (m) {
      name = cleanText(m[1]);
      title = m[2] ? cleanText(m[2]) : '';
    }

    // Gather bio from the next few paragraphs
    let bio = '';
    let next = $(el).next();
    let paraCount = 0;
    while (next && next.length && paraCount < 4) {
      if (next.is('p')) {
        const t = cleanText(next.text());
        if (t) bio += (bio ? ' ' : '') + t;
        paraCount++;
      }
      next = next.next();
    }

    // Find nearest preceding or following image
    let imgSrc = '';
    const prevImg = $(el).prevAll('img').first();
    if (prevImg && prevImg.attr('src')) {
      imgSrc = prevImg.attr('src');
    } else {
      const nextImg = $(el).nextAll('img').first();
      if (nextImg && nextImg.attr('src')) imgSrc = nextImg.attr('src');
    }

    // Deduplicate by name
    if (name && !people.find((p) => p.name.toLowerCase() === name.toLowerCase())) {
      people.push({ name, title, bio, image: imgSrc, profileUrl: null });
    }
  });

  // Fallback: collect images with alt that look like names
  $root.find('img[alt]').each((_, img) => {
    const alt = cleanText($(img).attr('alt') || '');
    const src = $(img).attr('src');
    if (!alt || !src) return;
    if (!people.find((p) => p.name.toLowerCase() === alt.toLowerCase())) {
      people.push({ name: alt, title: '', bio: '', image: src, profileUrl: null });
    }
  });

  return people;
}

async function run() {
  await fs.ensureDir(OUT_IMG_DIR);
  console.log('Fetching people page...');
  const html = await fetchHTML(PEOPLE_URL);
  console.log('Parsing people...');
  const people = await parsePeople(html);
  console.log(`Found ${people.length} entries.`);

  // Download images and rewrite local paths
  for (const p of people) {
    if (!p.image) {
      p.image = '/assets/people/placeholder.webp';
      continue;
    }
    try {
      const url = new URL(p.image, PEOPLE_URL).toString();
      const ext = path.extname(url).split('?')[0] || '.jpg';
      const fileSafe = p.name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
      const outFile = `${fileSafe}${ext}`;
      const outFull = path.join(OUT_IMG_DIR, outFile);
      console.log(`Downloading image for ${p.name} -> ${outFile}`);
      await downloadImage(url, outFull);
      p.image = `/assets/people/${outFile}`;
    } catch (e) {
      console.warn(`Image download failed for ${p.name}: ${e.message}`);
      p.image = '/assets/people/placeholder.webp';
    }
  }

  await fs.outputJson(OUT_DATA, people, { spaces: 2 });
  console.log(`Saved ${people.length} people to ${OUT_DATA}`);
}

run().catch((e) => {
  console.error(e);
  process.exit(1);
});

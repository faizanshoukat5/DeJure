// Enhanced image scraper that fetches actual image URLs from the page
const axios = require('axios');
const cheerio = require('cheerio');
const https = require('https');
const http = require('http');
const fs = require('fs');
const path = require('path');

const PEOPLE_URL = 'https://dejure.pk/people/';
const outputDir = path.join(__dirname, '..', 'public', 'assets', 'people');

function downloadImage(url, filename) {
  return new Promise((resolve, reject) => {
    const outputPath = path.join(outputDir, filename);
    const client = url.startsWith('https') ? https : http;
    
    console.log(`Downloading ${filename} from ${url}...`);
    
    const file = fs.createWriteStream(outputPath);
    client.get(url, (response) => {
      if (response.statusCode === 200) {
        response.pipe(file);
        file.on('finish', () => {
          file.close();
          console.log(`✓ Downloaded ${filename}`);
          resolve();
        });
      } else if (response.statusCode === 301 || response.statusCode === 302) {
        downloadImage(response.headers.location, filename).then(resolve).catch(reject);
      } else {
        fs.unlink(outputPath, () => {});
        reject(new Error(`Failed to download: ${response.statusCode}`));
      }
    }).on('error', (err) => {
      fs.unlink(outputPath, () => {});
      reject(err);
    });
  });
}

async function scrapeImages() {
  try {
    console.log('Fetching people page...\n');
    const { data } = await axios.get(PEOPLE_URL);
    const $ = cheerio.load(data);
    
    const images = [];
    
    // Try to find images in various common containers
    $('img').each((i, el) => {
      const src = $(el).attr('src') || $(el).attr('data-src');
      const alt = $(el).attr('alt') || '';
      
      if (src && (alt.toLowerCase().includes('hassan') || 
                  alt.toLowerCase().includes('ali') || 
                  alt.toLowerCase().includes('nasr') ||
                  src.includes('people') ||
                  src.includes('team'))) {
        images.push({ src, alt });
      }
    });
    
    console.log(`Found ${images.length} potential team images:\n`);
    images.forEach((img, i) => {
      console.log(`${i + 1}. ${img.alt || 'No alt'} -> ${img.src}`);
    });
    
    if (!fs.existsSync(outputDir)) {
      fs.mkdirSync(outputDir, { recursive: true });
    }
    
    // Download found images
    for (let i = 0; i < Math.min(images.length, 3); i++) {
      try {
        const img = images[i];
        const url = new URL(img.src, PEOPLE_URL).toString();
        const ext = path.extname(url).split('?')[0] || '.jpg';
        const filename = `team-member-${i + 1}${ext}`;
        await downloadImage(url, filename);
      } catch (error) {
        console.error(`Error downloading image ${i + 1}:`, error.message);
      }
    }
    
    console.log('\nDownload complete!');
    
  } catch (error) {
    console.error('Error scraping page:', error.message);
  }
}

scrapeImages();

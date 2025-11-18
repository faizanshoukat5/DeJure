// Recolor near-white background of the logo to the top banner gray
// Input:  client/public/assets/logo-dejure-main.jpg
// Output: client/public/assets/logo-dejure-main-graybg.png

import fs from 'fs';
import path from 'path';
import Jimp from 'jimp';
import sharp from 'sharp';

const ROOT = process.cwd();
const inputPath = path.join(ROOT, 'client', 'public', 'assets', 'logo-dejure-main.jpg');
const outputPath = path.join(ROOT, 'client', 'public', 'assets', 'logo-dejure-main-graybg.png');

// Gray used in top banner (custom.css: --color-warm-charcoal: #342e2a)
const TARGET_GRAY_HEX = '#342e2a';

// Thresholds
const WHITE_THRESHOLD = 248; // treat as white if all channels >= this
const BLACK_THRESHOLD = 40;  // treat as near-black if all channels <= this

(async () => {
  if (!fs.existsSync(inputPath)) {
    console.error(`Input not found: ${inputPath}`);
    process.exit(1);
  }

  const img = await Jimp.read(inputPath);
  const target = Jimp.cssColorToHex(TARGET_GRAY_HEX);
  const w = img.bitmap.width;
  const h = img.bitmap.height;

  const isWhite = (r, g, b) => r >= WHITE_THRESHOLD && g >= WHITE_THRESHOLD && b >= WHITE_THRESHOLD;
  const isBlack = (r, g, b) => r <= BLACK_THRESHOLD && g <= BLACK_THRESHOLD && b <= BLACK_THRESHOLD;

  const tr = (target >> 24) & 0xff;
  const tg = (target >> 16) & 0xff;
  const tb = (target >> 8) & 0xff;

  // Flood-fill from edges to recolor only edge-connected white regions (background),
  // preserving internal white like the "De" letters.
  const visited = new Uint8Array(w * h);
  const q = [];

  const enqueueIfWhite = (x, y) => {
    if (x < 0 || y < 0 || x >= w || y >= h) return;
    const idx = (y * w + x);
    if (visited[idx]) return;
    const i = idx * 4;
    const r = img.bitmap.data[i + 0];
    const g = img.bitmap.data[i + 1];
    const b = img.bitmap.data[i + 2];
    if (isWhite(r, g, b)) {
      visited[idx] = 1;
      q.push([x, y]);
    }
  };

  // Seed from all four edges
  for (let x = 0; x < w; x++) {
    enqueueIfWhite(x, 0);
    enqueueIfWhite(x, h - 1);
  }
  for (let y = 0; y < h; y++) {
    enqueueIfWhite(0, y);
    enqueueIfWhite(w - 1, y);
  }

  // BFS fill
  while (q.length) {
    const [cx, cy] = q.shift();
    const idx = (cy * w + cx) * 4;
    // Recolor to target gray
    img.bitmap.data[idx + 0] = tr;
    img.bitmap.data[idx + 1] = tg;
    img.bitmap.data[idx + 2] = tb;

    // Explore neighbors
    enqueueIfWhite(cx + 1, cy);
    enqueueIfWhite(cx - 1, cy);
    enqueueIfWhite(cx, cy + 1);
    enqueueIfWhite(cx, cy - 1);
  }

  // Improve visibility of the bottom tagline: recolor near-black to white in bottom band
  const bandStartY = Math.floor(h * 0.72); // bottom ~28%
  for (let y = bandStartY; y < h; y++) {
    for (let x = 0; x < w; x++) {
      const i = (y * w + x) * 4;
      const r = img.bitmap.data[i + 0];
      const g = img.bitmap.data[i + 1];
      const b = img.bitmap.data[i + 2];
      if (isBlack(r, g, b)) {
        img.bitmap.data[i + 0] = 255;
        img.bitmap.data[i + 1] = 255;
        img.bitmap.data[i + 2] = 255;
      }
    }
  }

  await img.writeAsync(outputPath);
  // Overlay white serif tagline using Sharp with SVG text
  const meta = await sharp(outputPath).metadata();
  const wpx = meta.width || 800;
  const hpx = meta.height || 400;
  const bandY = Math.floor(hpx * 0.80);
  const textY = Math.floor(hpx * 0.90);
  const fontSize = Math.floor(wpx * 0.065); // increased a bit for better readability
  // Use textLength to force the text to occupy ~88-92% of the logo width for a perfect fit
  const targetTextLength = Math.floor(wpx * 0.9);
  const svg = `<?xml version="1.0" encoding="UTF-8"?>
<svg width="${wpx}" height="${hpx}" viewBox="0 0 ${wpx} ${hpx}" xmlns="http://www.w3.org/2000/svg">
  <rect x="0" y="${bandY}" width="${wpx}" height="${hpx - bandY}" fill="${TARGET_GRAY_HEX}" />
  <text x="50%" y="${textY}" fill="#FFFFFF" text-anchor="middle" font-family="Georgia, 'Times New Roman', Times, serif" font-size="${fontSize}" font-weight="400" textLength="${targetTextLength}" lengthAdjust="spacingAndGlyphs">
    Advocates &amp; Legal Consultants
  </text>
</svg>`;

  const tmpOut = outputPath.replace(/\.png$/, '.tmp.png');
  await sharp(outputPath)
    .composite([{ input: Buffer.from(svg), top: 0, left: 0 }])
    .png()
    .toFile(tmpOut);
  fs.copyFileSync(tmpOut, outputPath);
  fs.unlinkSync(tmpOut);
  console.log(`Wrote: ${outputPath} (with white tagline)`);
})();

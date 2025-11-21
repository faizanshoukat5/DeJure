const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

// Input files (must exist in client/public/assets)
const inputs = [
  'clients-lawyer1.jpeg',
  'clients-lawyer.jpeg',
];

const publicAssets = path.join(__dirname, '..', 'public', 'assets');
const outDir = path.join(publicAssets, 'clients');

if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

const sizes = [320, 640, 1280, 1920];

async function processImage(fileName) {
  const inputFile = path.join(publicAssets, fileName);
  if (!fs.existsSync(inputFile)) {
    console.warn(`Skipping ${fileName} - file not found in public/assets`);
    return;
  }
  const baseName = path.parse(fileName).name.replace(/\s+/g, '-').toLowerCase();
  for (const size of sizes) {
    const outJpg = path.join(outDir, `${baseName}-${size}.jpg`);
    const outWebp = path.join(outDir, `${baseName}-${size}.webp`);
    await sharp(inputFile)
      .resize(size)
      .jpeg({ quality: 80 })
      .toFile(outJpg);
    await sharp(inputFile)
      .resize(size)
      .webp({ quality: 75 })
      .toFile(outWebp);
    console.log(`Wrote ${outJpg} and ${outWebp}`);
  }
}

(async () => {
  for (const input of inputs) {
    try {
      await processImage(input);
    } catch (err) {
      console.error(`Error processing ${input}:`, err);
    }
  }
})();

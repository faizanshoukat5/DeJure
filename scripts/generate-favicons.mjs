import path from 'path';
import fs from 'fs';
import sharp from 'sharp';

const ROOT = process.cwd();
const input = path.join(ROOT, 'client', 'public', 'assets', 'logo-dejure-main-graybg.png');
const out32 = path.join(ROOT, 'client', 'public', 'favicon-32.png');
const out64 = path.join(ROOT, 'client', 'public', 'favicon-64.png');

async function generate() {
  if (!fs.existsSync(input)) {
    console.error('Input logo not found:', input);
    process.exit(1);
  }

  const meta = await sharp(input).metadata();
  const w = meta.width || 512;
  const h = meta.height || 256;

  // Crop the top portion where the box logo sits (exclude bottom tagline band)
  let cropHeight = Math.floor(h * 0.78); // keep top ~78%
  if (cropHeight <= 0 || cropHeight > h) cropHeight = h;
  const cropWidth = Math.min(w, meta.width || w);

  // Use separate pipelines for each output to avoid reusing the same stream
  await sharp(input)
    .extract({ left: 0, top: 0, width: cropWidth, height: cropHeight })
    .resize(64, 64, { fit: 'contain', background: { r: 52, g: 46, b: 42, alpha: 1 } })
    .png()
    .toFile(out64);

  await sharp(input)
    .extract({ left: 0, top: 0, width: cropWidth, height: cropHeight })
    .resize(32, 32, { fit: 'contain', background: { r: 52, g: 46, b: 42, alpha: 1 } })
    .png()
    .toFile(out32);

  console.log('Wrote favicons:', out64, out32);
}

generate().catch(err => { console.error(err); process.exit(1); });

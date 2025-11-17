#!/usr/bin/env node
/**
 * Export SVG logo variants to PNG files at multiple sizes using sharp.
 * Run: node client/scripts/export-logos.mjs
 */

import sharp from 'sharp';
import { readFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const assetsDir = join(__dirname, '../public/assets');

const variants = ['logo-option7-seal-A', 'logo-option7-seal-B', 'logo-option7-seal-C', 'logo-option7-seal-D'];
const sizes = [
  { suffix: '@1x', width: 520 },
  { suffix: '@2x', width: 1040 },
  { suffix: '_mid@1x', width: 260 },
  { suffix: '_small@1x', width: 130 }
];

console.log(`Exporting logos from ${assetsDir}...\n`);

for (const variant of variants) {
  const svgPath = join(assetsDir, `${variant}.svg`);
  const svgString = readFileSync(svgPath, 'utf-8');

  for (const { suffix, width } of sizes) {
    const outPath = join(assetsDir, `${variant}${suffix}.png`);
    await sharp(Buffer.from(svgString), { density: 300 })
      .resize({ width })
      .png({ quality: 100 })
      .toFile(outPath);
    console.log(`✓ ${variant}${suffix}.png (${width}px)`);
  }
}

console.log('\n✅ Export complete. PNG files generated in client/public/assets/');

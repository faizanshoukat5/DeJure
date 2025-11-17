const https = require('https');
const fs = require('fs');
const path = require('path');

const url = 'https://tipsforlawyers.com/wp-content/uploads/2013/10/Lawyer-at-work1.jpg';
const outDir = path.join(__dirname, '..', 'public', 'assets');
const outPath = path.join(outDir, 'lawyer-at-work1.jpg');

if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

console.log('Downloading image from', url);

const file = fs.createWriteStream(outPath);
https.get(url, (res) => {
  if (res.statusCode !== 200) {
    console.error('Failed to download image. Status code:', res.statusCode);
    process.exit(1);
  }
  res.pipe(file);
  file.on('finish', () => {
    file.close();
    console.log('Saved image to', outPath);
  });
}).on('error', (err) => {
  fs.unlink(outPath, () => {});
  console.error('Error downloading image:', err.message);
  process.exit(1);
});

// Simple image downloader for team photos
const https = require('https');
const http = require('http');
const fs = require('fs');
const path = require('path');

const images = [
  {
    url: 'https://dejure.pk/wp-content/uploads/2024/01/hassan-kamran-bashir.jpg',
    filename: 'hassan-kamran-bashir.jpg'
  },
  {
    url: 'https://dejure.pk/wp-content/uploads/2024/01/muhammad-ali.jpg',
    filename: 'muhammad-ali.jpg'
  },
  {
    url: 'https://dejure.pk/wp-content/uploads/2024/01/nasrminallah-mian.jpg',
    filename: 'nasrminallah-mian.jpg'
  }
];

const outputDir = path.join(__dirname, '..', 'public', 'assets', 'people');

function downloadImage(url, filename) {
  return new Promise((resolve, reject) => {
    const outputPath = path.join(outputDir, filename);
    const client = url.startsWith('https') ? https : http;
    
    console.log(`Downloading ${filename}...`);
    
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
        // Handle redirect
        downloadImage(response.headers.location, filename).then(resolve).catch(reject);
      } else {
        fs.unlink(outputPath, () => {});
        reject(new Error(`Failed to download ${filename}: ${response.statusCode}`));
      }
    }).on('error', (err) => {
      fs.unlink(outputPath, () => {});
      reject(err);
    });
  });
}

async function downloadAll() {
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  console.log('Starting image downloads...\n');
  
  for (const img of images) {
    try {
      await downloadImage(img.url, img.filename);
    } catch (error) {
      console.error(`✗ Error downloading ${img.filename}:`, error.message);
      console.log(`  Trying alternative approach...`);
      // If standard download fails, user will need to manually download
      console.log(`  Please manually download from: ${img.url}`);
    }
  }
  
  console.log('\nDownload process complete!');
  console.log(`Images saved to: ${outputDir}`);
}

downloadAll().catch(console.error);

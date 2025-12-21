const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const input = 'public/img/aboutUs/aboutUs2.jpeg';
const tempOutput = 'public/img/aboutUs/aboutUs2_opt.jpeg';

async function optimize() {
  try {
    const metadata = await sharp(input).metadata();
    console.log(`Original dimensions: ${metadata.width}x${metadata.height}, Size: ${(fs.statSync(input).size / 1024 / 1024).toFixed(2)} MB`);

    await sharp(input)
      .resize({ width: 800, withoutEnlargement: true }) // Resize to max 800px width
      .jpeg({ quality: 90, mozjpeg: true }) // High quality JPEG using mozjpeg
      .toFile(tempOutput);

    const newSize = fs.statSync(tempOutput).size;
    console.log(`New Size: ${(newSize / 1024).toFixed(2)} KB`);

    // Overwrite original
    fs.renameSync(tempOutput, input);
    console.log('Optimized image overwrote original.');

  } catch (err) {
    console.error('Error optimizing image:', err);
  }
}

optimize();

const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const input = 'public/img/aboutUs/aboutUs2.svg';
const output = 'public/img/aboutUs/aboutUs2.webp';

sharp(input)
  .resize(800) // Resize to reasonable width
  .toFormat('webp', { quality: 80 })
  .toFile(output)
  .then(info => {
    console.log('Conversion complete:', info);
  })
  .catch(err => {
    console.error('Error converting SVG:', err);
  });

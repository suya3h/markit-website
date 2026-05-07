const sharp = require('sharp');

sharp('./src/assets/Work RE/Hotel Dhruva/BANNER DMG 1-1.png', { limitInputPixels: false })
  .resize({ width: 1920, withoutEnlargement: true })
  .webp({ quality: 80 })
  .toFile('./src/assets/Work RE/Hotel Dhruva/BANNER DMG 1-1.webp')
  .then(info => console.log('Done:', info))
  .catch(err => console.error('Error:', err.message));

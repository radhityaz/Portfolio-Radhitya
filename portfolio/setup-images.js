const fs = require('fs');
const path = require('path');

// Create directories if they don't exist
const publicDir = path.join(__dirname, 'public');
const imagesDir = path.join(publicDir, 'images');

if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir);
  console.log('Created public directory');
}

if (!fs.existsSync(imagesDir)) {
  fs.mkdirSync(imagesDir);
  console.log('Created public/images directory');
}

// Source image files
const sourceFiles = [
  { src: '../background-campus.png', dest: 'background-campus.png' },
  { src: '../campus-life.png', dest: 'campus-life.png' },
  { src: '../me.png', dest: 'me.png' },
  { src: '../profile.png', dest: 'profile.png' }
];

// Copy files
sourceFiles.forEach(file => {
  const sourcePath = path.join(__dirname, file.src);
  const destPath = path.join(imagesDir, file.dest);
  
  try {
    fs.copyFileSync(sourcePath, destPath);
    console.log(`Copied ${file.src} to public/images/${file.dest}`);
  } catch (err) {
    console.error(`Error copying ${file.src}: ${err.message}`);
  }
});

console.log('Image setup complete!');

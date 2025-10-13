// deleteFile.js
const fs = require('fs');

const fileName = 'hello.txt';

fs.unlink(fileName, (err) => {
  if (err) {
    return console.error('Error deleting file:', err);
  }
  console.log('File deleted:', fileName);
});

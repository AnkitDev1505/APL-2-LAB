// readFile.js
const fs = require('fs');

const fileName = 'hello.txt';

fs.readFile(fileName, 'utf8', (err, data) => {
  if (err) {
    return console.error('Error reading file:', err);
  }
  console.log('File content:');
  console.log(data);
});

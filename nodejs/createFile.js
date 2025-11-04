// createFile.js
const fs = require('fs');

const fileName = 'hello.txt';
const content = 'Hello, Node.js!';

fs.writeFile(fileName, content, (err) => {
  if (err) {
    return console.error('Error creating file:', err);
  }
  console.log('File created:', fileName);
});

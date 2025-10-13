// read_write.js
const fs = require('fs');

// Write to a file
fs.writeFileSync('example.txt', 'Hello, world!', 'utf8');
console.log('File written successfully.');

// Read from a file
const data = fs.readFileSync('example.txt', 'utf8');
console.log('File contents:', data);

// createDir.js
const fs = require('fs');

const dirName = 'testDir';

fs.mkdir(dirName, (err) => {
  if (err) {
    return console.error('Error creating directory:', err);
  }
  console.log('Directory created:', dirName);
});

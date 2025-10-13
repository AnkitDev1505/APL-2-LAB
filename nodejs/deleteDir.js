// deleteDir.js
const fs = require('fs');

const dirName = 'testDir';

fs.rmdir(dirName, (err) => {
  if (err) {
    return console.error('Error deleting directory:', err);
  }
  console.log('Directory deleted:', dirName);
});

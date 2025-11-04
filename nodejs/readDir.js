// readDir.js
const fs = require('fs');

const dirName = '.';

fs.readdir(dirName, (err, files) => {
  if (err) {
    return console.error('Error reading directory:', err);
  }
  console.log('Files and folders inside', dirName, ':');
  console.log(files);
});

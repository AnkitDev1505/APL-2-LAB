// fileSystemDemo.js
const fs = require('fs');
const path = require('path');

const dirName = 'myFolder';
const fileName = path.join(dirName, 'example.txt');

// Step 1: Create Directory
fs.mkdir(dirName, { recursive: true }, (err) => {
  if (err) return console.error('Error creating dir:', err);
  console.log('✅ Directory created:', dirName);

  // Step 2: Create File inside it
  fs.writeFile(fileName, 'Hello, this is a sample file!', (err) => {
    if (err) return console.error('Error creating file:', err);
    console.log('✅ File created:', fileName);

    // Step 3: Read Directory Contents
    fs.readdir(dirName, (err, files) => {
      if (err) return console.error('Error reading dir:', err);
      console.log('📂 Files inside directory:', files);

      // Step 4: Read the File
      fs.readFile(fileName, 'utf8', (err, data) => {
        if (err) return console.error('Error reading file:', err);
        console.log('📄 File content:', data);

        // Step 5: Delete the File
        fs.unlink(fileName, (err) => {
          if (err) return console.error('Error deleting file:', err);
          console.log('❌ File deleted.');

          // Step 6: Delete the Directory
          fs.rmdir(dirName, (err) => {
            if (err) return console.error('Error deleting dir:', err);
            console.log('🗑️ Directory deleted.');
          });
        });
      });
    });
  });
});

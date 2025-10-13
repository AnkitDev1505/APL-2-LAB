// fsOperationsDemo.js
// A meaningful Node.js script that performs all common file system operations

const fs = require('fs');
const path = require('path');

// Folder and file names
const folderName = path.join(__dirname, 'project_data');
const fileName = path.join(folderName, 'info.txt');

// Step-by-step function using callbacks turned into Promises for clarity
async function run() {
  try {
    console.log('\n🚀 Starting file system operations demo...\n');

    // 1️⃣ Create Directory
    await fs.promises.mkdir(folderName, { recursive: true });
    console.log('📁 Directory created ->', folderName);

    // 2️⃣ Create File and Write Data
    const content = `
Project Name: File System Demo
Created: ${new Date().toLocaleString()}
Description: This folder and file were created automatically by Node.js
    `.trim();

    await fs.promises.writeFile(fileName, content, 'utf8');
    console.log('📝 File created ->', fileName);

    // 3️⃣ Read File Content
    const data = await fs.promises.readFile(fileName, 'utf8');
    console.log('\n📖 File Content:\n', data);

    // 4️⃣ Read Directory Contents
    const files = await fs.promises.readdir(folderName);
    console.log('\n📂 Directory Contents:', files);

    // 5️⃣ Delete the File
    await fs.promises.unlink(fileName);
    console.log('❌ File deleted ->', fileName);

    // 6️⃣ Delete the Directory
    await fs.promises.rmdir(folderName);
    console.log('🗑️ Directory deleted ->', folderName);

    console.log('\n✅ All file system operations completed successfully!\n');
  } catch (err) {
    console.error('❌ Error:', err.message);
  }
}

run();

// fileProcessor.js
const fs = require('fs');
const fsPromises = require('fs').promises;

// === 1. Synchronous File Write ===
function writeSyncFile() {
  console.log("=== Step 1: Writing file synchronously ===");
  const data = "Initial data written synchronously.\n";
  fs.writeFileSync('data.txt', data, 'utf8');
  console.log("✅ File written successfully (sync).");
}

// === 2. Asynchronous File Read (Callback style) ===
function readAsyncFile(callback) {
  console.log("\n=== Step 2: Reading file asynchronously (callback) ===");
  fs.readFile('data.txt', 'utf8', (err, data) => {
    if (err) {
      console.error("❌ Error reading file:", err);
      return callback(err);
    }
    console.log("📖 File contents (callback):\n", data);
    callback(null, data);
  });
}

// === 3. Append Data using Promises ===
function appendWithPromise() {
  console.log("\n=== Step 3: Appending file using Promises ===");
  const newData = "Additional line appended using Promises.\n";
  return fsPromises.appendFile('data.txt', newData)
    .then(() => console.log("✅ File appended successfully (Promise)."))
    .catch(err => console.error("❌ Error appending file:", err));
}

// === 4. Read Everything Again using async/await ===
async function readWithAsyncAwait() {
  console.log("\n=== Step 4: Reading file using async/await ===");
  try {
    const data = await fsPromises.readFile('data.txt', 'utf8');
    console.log("📖 File contents (async/await):\n", data);
  } catch (err) {
    console.error("❌ Error reading file (async/await):", err);
  }
}

// === Main Workflow ===
function main() {
  writeSyncFile();

  readAsyncFile((err) => {
    if (err) return;

    appendWithPromise()
      .then(() => readWithAsyncAwait())
      .catch(console.error);
  });
}

// Run the program
main();

const fs = require("fs");
const fsPromises = require("fs").promises;

// ---------- 1. Synchronous ----------
function readFileSyncExample() {
  console.log("\n--- Synchronous Example ---");
  try {
    const data = fs.readFileSync("example.txt", "utf8"); // Blocking
    console.log("File content:", data);
  } catch (err) {
    console.error("Error:", err);
  }
  console.log("Synchronous: This runs AFTER file is read.");
}

// ---------- 2. Asynchronous with Callback ----------
function readFileCallbackExample() {
  console.log("\n--- Asynchronous with Callback Example ---");
  fs.readFile("example.txt", "utf8", (err, data) => {
    if (err) {
      console.error("Error:", err);
      return;
    }
    console.log("File content:", data);
  });
  console.log("Callback: This runs BEFORE file is read (non-blocking).");
}

// ---------- 3. Asynchronous with Promise / async-await ----------
async function readFilePromiseExample() {
  console.log("\n--- Asynchronous with Promise/async-await Example ---");
  try {
    const data = await fsPromises.readFile("example.txt", "utf8"); // Non-blocking
    console.log("File content:", data);
  } catch (err) {
    console.error("Error:", err);
  }
  console.log("Async/Await: This prints AFTER file is read (inside function).");
}

// Run all examples
readFileSyncExample();
readFileCallbackExample();
readFilePromiseExample();

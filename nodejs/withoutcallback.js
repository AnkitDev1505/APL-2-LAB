const fs = require("fs");

// Synchronous - without callback
try {
  const data = fs.readFileSync("example.txt", "utf8");
  console.log("Without callback -> File content:", data);
} catch (err) {
  console.error("Error reading file:", err);
}

console.log("This will print after file is read (sync).");

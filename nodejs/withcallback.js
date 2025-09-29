const fs = require("fs");

// Asynchronous - with callback
fs.readFile("example.txt", "utf8", (err, data) => {
  if (err) {
    console.error("Error reading file:", err);
    return;
  }
  console.log("With callback -> File content:", data);
});

console.log("This will print before file is read (async).");

// Global Objects Demonstration in JavaScript

// 1️⃣ globalThis - universal global object (works in browser + Node.js)
console.log("1️⃣ globalThis Example:");
console.log(globalThis); // represents the global scope
console.log("--------------------------------");

// 2️⃣ Math - built-in math operations
console.log("2️⃣ Math Object Example:");
console.log("PI =", Math.PI);
console.log("Square root of 16 =", Math.sqrt(16));
console.log("Random number =", Math.random());
console.log("--------------------------------");

// 3️⃣ Date - for date and time
console.log("3️⃣ Date Object Example:");
const now = new Date();
console.log("Current Date & Time =", now);
console.log("Year =", now.getFullYear());
console.log("--------------------------------");

// 4️⃣ JSON - working with JSON data
console.log("4️⃣ JSON Object Example:");
const person = { name: "Alice", age: 25 };
const jsonStr = JSON.stringify(person);
console.log("JSON String:", jsonStr);
console.log("Parsed Object:", JSON.parse(jsonStr));
console.log("--------------------------------");

// 5️⃣ Number, String, Boolean - wrapper objects
console.log("5️⃣ Wrapper Objects Example:");
const num = new Number(42);
const str = new String("Hello");
const bool = new Boolean(true);
console.log(num.valueOf(), str.valueOf(), bool.valueOf());
console.log("--------------------------------");

// 6️⃣ Array - global object for lists
console.log("6️⃣ Array Object Example:");
const fruits = ["Apple", "Banana", "Cherry"];
console.log("Array:", fruits);
console.log("Length:", fruits.length);
console.log("Includes 'Banana'?", fruits.includes("Banana"));
console.log("--------------------------------");

// 7️⃣ Map and Set - ES6 collections
console.log("7️⃣ Map and Set Example:");
const map = new Map();
map.set("name", "John");
map.set("age", 30);
console.log("Map:", map);

const set = new Set([1, 2, 3, 3, 2]);
console.log("Set (unique values):", set);
console.log("--------------------------------");

// 8️⃣ Promise - global object for async operations
console.log("8️⃣ Promise Example:");
const promise = new Promise((resolve) => {
  setTimeout(() => resolve("Promise resolved!"), 1000);
});
promise.then(console.log);
console.log("--------------------------------");

// 9️⃣ console - for debugging/logging
console.log("9️⃣ Console Object Example:");
console.log("This is a normal log");
console.warn("This is a warning");
console.error("This is an error");
console.table([{ name: "A", score: 90 }, { name: "B", score: 85 }]);
console.log("--------------------------------");

// 🔟 Infinity, NaN, undefined - global properties
console.log("🔟 Global Properties Example:");
console.log("Infinity:", Infinity);
console.log("NaN:", NaN);
console.log("undefined:", undefined);

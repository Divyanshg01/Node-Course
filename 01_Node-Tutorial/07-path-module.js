//Path - module

const path = require("path");

console.log(path.sep);

const filePath = path.join("/content", "subfolder", "test.txt");
const aabsolute = path.join(__dirname, "content", "subfolder", "test.txt");

console.log(filePath);
console.log(aabsolute);
const base = path.basename(filePath);
console.log(base);

//absolute path

const absolute = path.resolve("content", "subfolder", "test.txt");
console.log(absolute);

//Question - aabsolute and absolute giving same result

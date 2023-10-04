const { log } = require("console");
const path = require("path");

console.log(path.sep);

const filePAth = path.join("/content/", "subfolder", "text.txt");

console.log(filePAth);

const base = path.basename(filePAth);
console.log(base);

const absolute = path.resolve(__dirname, "content", "subfolder", "test.txt");
console.log(absolute);

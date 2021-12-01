const path = require('path');

let filepath = "/Users/kavita46/vscodeProjects/5-OOP/11.24/hello.js";

console.log(__dirname);

let fileName = path.basename(filepath);

let ext = path.extname(filepath);

let dir = path.dirname(filepath);

let file = path.parse(filepath);

// console.log(fileName);
// console.log(ext);
// console.log(dir);
console.log(file);

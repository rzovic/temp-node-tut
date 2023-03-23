const path = require('path');

console.log(path.sep)

const filePath = path.join('/content/','subfolder','test.txt')
console.log(filePath)
//  /content/subfolder/test.txt

const base = path.basename(filePath)
console.log(base)
// test.txt

const absolute = path.resolve(__dirname,'content','subfolder','test.txt')
console.log(absolute)

// /Users/robertzovic/Desktop/Documents/Courses/nodejs/tutorial/content/subfolder/test.txt

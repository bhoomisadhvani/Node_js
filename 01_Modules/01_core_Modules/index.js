// module js

import fs from "fs";

fs.writeFileSync("new.txt", "new text file  created");

fs.writeFileSync("news.pdf", "new pdf  created");

// access file

const text = fs.readFileSync("new1.txt", "utf-8");
console.log("text - index.js:12", text);

//  common js

const files = require("fs");

files.writeFileSync("new2.txt", "new 2 file created");

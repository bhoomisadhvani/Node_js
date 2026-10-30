import chalk from "chalk";

console.log(chalk.blue("hello - 2_ex.js:3"));

console.log(chalk.black("black color - 2_ex.js:5"));

console.log(chalk.yellow("yellow color - 2_ex.js:7"));

// moment

import moment from "moment";

const dte = moment().format("DD-MM-YYYY");

console.log("date is - 2_ex.js:15", dte);

const time = moment().format("HH-mm-ss");

console.log("time is - 2_ex.js:19", chalk.green(time));

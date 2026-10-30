import chalk from "chalk";

console.log(chalk.red("Node js - ex.js:3"));

import moment from "moment";

const date = moment().format("MMM Do YYYY");

console.log(chalk.green("date is - ex.js:9", date));

// const fs = require("fs");
// const validator = require("validator");
// const Name = require("./hello");
const chalk = require("chalk");

const os = require("os");

// Printing the text
// console.log(chalk.gray("aayush"));
// console.log("chalk value:", chalk);
// console.log(chalk.redBright("aayush"));
// console.log(process.argv, process.memoryUsage(), os.homedir());
// this is a file systoum module

// console.log("Print fs value:", fs);

// fs.writeFileSync("pankaj.txt", "this is new file created by file systm module");

// this help to append exit file text or data

// fs.appendFileSync("pankaj.txt", "     data to append");

// const fullName = Name("Pankaj Kumar ", " Meena");

// const Emailvalidate = validator.isEmail("gmail.com");
// const validateUrl = validator.isURL("https://fantiger.com");
// console.log("Print Name :", fullName, Emailvalidate, validateUrl);

// 1.) install chalk project and use

// 1.)

const command = process.argv[2];
// console.log(command, process.argv);

if (command === "pankaj") {
  console.log("this is the third element value:", command);
} else if (command === "roy") {
  console.log("this is the roy element value:", command);
}

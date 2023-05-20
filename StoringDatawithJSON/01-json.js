// // const fs = require("fs");
// const notes = require("./getNotes");

// const yargs = require("yargs");

// yargs.version("1.1.0");
// yargs.command({
//   command: "addName",
//   describe: "Add two name",
//   builder: {
//     title: {
//       describe: "Add two name 1",
//       demandOption: true,
//       type: "string",
//     },
//     body: {
//       describe: "Add two name Body",
//       demandOption: true,
//       type: "string",
//     },
//   },
//   handler: function (argv) {
//     // console.log("Create New Command help of yargs package", argv);
//     notes.addNote(argv.title, argv.body);
//   },
// });

// yargs.parse();

// console.log("Print notes", notes);

// // const book = {
// //   name: "ramayan",
// //   writer: "Ram",
// // };

// // js object convert to String
// // const BookStringify = JSON.stringify(book); //but we can not access data BookStringify.name through beacuse all data convert to string

// // fs.writeFileSync("01-file.json", BookStringify);

// // const BookfinaljsonObj = JSON.parse(BookStringify); //but we can access data BookStringify.name through beacuse all data convert to javascript OBject

// // fs.writeFileSync("01-file.json", BookfinaljsonObj); The "data" argument must be of type string or an instance of Buffer
// // console.log(BookStringify.name, BookfinaljsonObj.name);

// //this will be convert json string data to JS Object and we can now access data like BookfinaljsonObj.name

// // read the json data

// // const readcreateFile = fs.readFileSync("01-file.json");

// // console.log("Print readFile data", readcreateFile.toJSON()); // this return buffer data a json format

// // Print readFile data {
// //   type: 'Buffer',
// //   data: [
// //     123,  34, 110,  97, 109, 101,  34,  58,
// //      34, 114,  97, 109,  97, 121,  97, 110,
// //      34,  44,  34, 119, 114, 105, 116, 101,
// //     114,  34,  58,  34,  82,  97, 109,  34,
// //     125
// //   ]
// // }
// // console.log("Print readFile data", JSON.parse(readcreateFile)); return json object parse code

// // console.log(readcreateFile.toString()); // return json string code

const chalk = require("chalk");
const yargs = require("yargs");
const notes = require("./getNotes");

// Customize yargs version
yargs.version("1.1.0");

// Create add command
yargs.command({
  command: "add",
  describe: "Add a new note",
  builder: {
    title: {
      describe: "Note title",
      demandOption: true,
      type: "string",
    },
    body: {
      describe: "Note body",
      demandOption: true,
      type: "string",
    },
  },
  handler: function (argv) {
    notes.addNote(argv.title, argv.body);
  },
});

// Create remove command
yargs.command({
  command: "remove",
  describe: "Remove a note",
  builder: {
    title: {
      describe: "Note title",
      demandOption: true,
      type: "string",
    },
  },
  handler: function (argv) {
    notes.removeNote(argv.title);
  },
});

// Create list command
yargs.command({
  command: "list",
  describe: "List your notes",
  handler: function () {
    console.log("Listing out all notes");
  },
});

// Create read command
yargs.command({
  command: "read",
  describe: "Read a note",
  handler: function () {
    console.log("Reading a note");
  },
});

yargs.parse();

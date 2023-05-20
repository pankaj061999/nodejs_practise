const yargs = require("yargs");

// console.log("yargsCommand value Parse command line:", yargsCommand.argv);

yargs.version("1.1.0");
yargs.command({
  command: "addName",
  describe: "Add two name",
  builder: {
    title: {
      describe: "Add two name 1",
      demandOption: true,
      type: "string",
    },
    body: {
      describe: "Add two name Body",
      demandOption: true,
      type: "string",
    },
  },
  handler: function (argv) {
    // console.log("Create New Command help of yargs package", argv);
    console.log("Print Title :", argv.title);

    console.log("Print body :", argv.body);
  },
});

yargs.parse();
// console.log("yargsCommand value Parse command line:", yargs.argv);

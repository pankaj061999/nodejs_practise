const nodeCron = require("node-cron");

// To schedule a job, you need to invoke the nodeCron.schedule method with two arguments. There is a third optional argument that you can pass to the method for additional configuration.
// nodeCron.schedule(expression, (a) => {}, options);

// "* * * * * *"
//  | | | | | |
//  | | | | | |
//  | | | | | day of week
//  | | | | month
//  | | | day of month
//  | | hour
//  | minute
//  second(optional)

// const job = nodeCron.schedule("05 07 * * * *", function jobYouNeedToExecute() {
//   // Do whatever you want in here. Send email, Make  database backup or download data.
//   console.log(new Date().toLocaleString(), "every second run");
// });

// How to Use Names to Populate Chron Expressions
// For the month and day of the week fields, you can use names. These can be short or long names. For example January or Jan.

// every 20 sec run cron
// const job = nodeCron.schedule(
//   "*/20 * * * * *",
//   () => {
//     console.log(new Date().toLocaleString());
//   },
// when we are using scheduled value true then we don't need manual run this cron nut when set value scheduled false then we need manualy run code
//   {
//     scheduled: false,
//     timeZone: "Asia/Kolkata",
//   }
// );

// this code only excute b/w 5 to 10 sec
// const job = nodeCron.schedule("5-10 * * * * *", () => {
//   console.log(new Date().toLocaleString());
// });

// multiple value 5 , 10 , 15 sec
// const job = nodeCron.schedule("5,10,15,20 * * * * *", () => {
//   console.log(new Date().toLocaleString());
// });

const job = nodeCron.schedule(
  "22 5 * * *",
  () => {
    console.log(new Date().toLocaleString());
  },
  {
    scheduled: false,
    timeZone: "Asia/Kolkata",
  }
);

console.log(nodeCron, job.start());

// const Redis = require("ioredis");
// const { MongoClient } = require("mongodb");

// const redis = new Redis({ host: "localhost", port: 6379 }); // Replace with your Redis connection details
// const mongoURL = "mongodb://localhost:27017/local"; // Replace with your MongoDB connection URL
// const dbName = "your_database_name"; // Replace with your MongoDB database name

// const client = new MongoClient(mongoURL, { useUnifiedTopology: true });

// console.log(Redis);

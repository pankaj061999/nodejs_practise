const MongoClient = require("mongodb").MongoClient;
const url = "mongodb://localhost:27017/";

// Create Instance of MongoClient for mongodb

// MongoClient.connect(url, { useNewurlparser: true }, (error, client) => {
//   if (error) {
//     return console.log("not connect mongodb");
//   } else {
//     console.log("cline");
//     const db = client.db("config");
//     db.collection("e-commerse").insertOne({
//       name: "Jupiter",
//       age: 24,
//     });
//   }
// });
const client = new MongoClient(url);

// Connect to database
client
  .connect()
  .then((item) => {
    console.log("Connected Successfully");
    client.close();
  })
  .catch((error) => console.log("Failed to connect", error));
// const newpromise = new Promise((resolve, reject) => {
//   resolve("hey this is resolved condtion");
// });

// newpromise.then((item) => {
//   console.log(item);
// });

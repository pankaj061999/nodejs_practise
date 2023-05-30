const { MongoClient } = require("mongodb");

// Replace the uri string with your connection string.
// const url = "mongodb+srv://fantigerapis:marea4lEmG5I4pHM@cluster1.e8hc9ph.mongodb.net";
const url = "mongodb://localhost:27017"

const client = new MongoClient(url);
const database = "local"


async function getData() {
  try {
   const result = await client.connect();
  const db = result.db(database)

  const collection = db.collection("startup_log")

  const finalresult = await collection.find({ }).toArray()
  console.log(finalresult)
  } finally {
    await client.close();
  }
}
getData().catch(console.dir);
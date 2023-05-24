// const https = require("https");

// const reuest = https.request(url, (response) => {
//   let data = "";
//   response.on("data", (chunk) => {
//     data = data + chunk.toString();
//   });
//   response.on("end", () => {
//     const body = JSON.parse(data);
//     console.log(body);
//   });
// });

// reuest.on("error", (error) => {
//   console.log("this is error", error);
// });

const https = require("https");
const url = "https://api.publicapis.org/entries";
const fs = require("fs");
const request = https.request(url, (response) => {
  let data = "";

  response.on("data", (chunk) => {
    data = data + chunk.toString();
    // console.log(JSON.stringify(data))
  });

  response.on("end", () => {
    // const body = JSON.stringify(data)
    // fs.writeFileSync("example.txt", JSON.stringify(data));
    console.log(JSON.parse(data));
  });

  //     let data1 = fs.readFileSync("example.txt");
  // // data1 = JSON.parse(data1);
  // console.log(JSON.parse(data1).toString());
});

request.on("error", (error) => {
  console.log("An error", error);
});

request.end();

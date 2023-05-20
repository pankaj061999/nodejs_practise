// console.log("starting index.js");

// setTimeout(() => {
//   console.log("Print after 2 sec this console");
// }, 2000);

// console.log("Ending");

// const request = require("request");

// const url = "https://api.publicapis.org/entries";

// console.log("Print parse url:", url.parse, request.jar());

// request({ url: url, json: true }, (error, response) => {
//   //   const data = JSON.parse(response.body);
//   console.log(response.body);
// });

// callback function abstruct
// const add = (a, b, callback) => {
//   setTimeout(() => {
//     callback(a + b);
//   }, 2000);
// };

// add(2, 3, (data) => {
//   console.log(data);
// });
const request = require("request");
const geocode = require("./utils/geocode");

const url = "https://api.publicapis.org/entries";

request({ url: url, json: true }, (error, response) => {
  if (error) {
    console.log("Unable to connect to weather service!");
  }
});

const geocodeURL = "https://api.publicapis.org/entries";

request({ url: geocodeURL, json: true }, (error, response) => {
  if (error) {
    console.log("Unable to connect to location services!", error, response);
  }
});

geocode("Boston", (error, data) => {
  console.log("Error", error);
  console.log("Data", data);
});

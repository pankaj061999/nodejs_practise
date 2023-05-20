const request = require("request");

const geocode = (address, callback) => {
  const url = "https://api.publicapis.org/entries";

  request({ url: url, json: true }, (error, response) => {
    if (error) {
      callback("Unable to connect to location services!", undefined);
    } else if (response.body) {
      callback("Unable to find location. Try another search.", undefined);
    } else {
      callback(undefined, {
        latitude: response,
        longitude: response.body,
        location: response.body,
      });
    }
  });
};

module.exports = geocode;

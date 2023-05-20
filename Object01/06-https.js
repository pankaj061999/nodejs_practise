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


const https = require('https')
const url = "https://api.publicapis.org/entries";
const request = https.request(url, (response) => {
    let data = ''

    response.on('data', (chunk) => {
        data = data + chunk.toString()
    })

    response.on('end', () => {
        const body = JSON.parse(data)
        console.log(body)
    })

})

request.on('error', (error) => {
    console.log('An error', error)
})

request.end()
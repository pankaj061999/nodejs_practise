const express = require('express');
const httpStatus = require('http-status');
require("../../config");
const Product = require('../../modal/product');
const app = express();

app.use(express.json());

app.post("/create", async (req, resp) => {
    let data = new Product(req.body);
    const result = await data.save();
    resp.status(httpStatus.OK).send({code: httpStatus.OK, message: "success", result})
});

app.get("/list", async (req, resp) => {
    let data = await Product.find();
    console.log(data)
    resp.status(httpStatus.OK).send({code: httpStatus.OK, message: "success", data})
    // resp.send(data);
})

app.delete("/delete/:_id", async (req, resp) => {
    console.log(req.params)
    let data = await Product.deleteOne(req.params);
    resp.status(httpStatus.OK).send({code: httpStatus.OK, message: "success", data})
})


// app.put("/update/:_id",async (req, resp) => {
//     console.log(req.params)
//     let data = await Product.updateOne(
//         req.params,
//         {$set: req.body}
//     );
//     resp.send(data);
// })

app.listen(3000)
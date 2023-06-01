const mongoose = require('mongoose');
const productSchema= mongoose.Schema({
    hostname:  String,
    name:  String,
    city: String,
    age: Number
});


module.exports= mongoose.model("startup_log",productSchema);
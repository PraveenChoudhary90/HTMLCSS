const mongoose = require("mongoose");
const StuSchema = new mongoose.Schema({
    name:String,
    email:String,
    city:String,
    number:String,
    state:String,
    defaultImage:String,
    Image:[String]
})



module.exports = mongoose.model("PStudent", StuSchema);
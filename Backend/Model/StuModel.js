
const mongoose  =require("mongoose");
const StuSchema = new mongoose.Schema({
    name:String,
    email:String,
    city:String,
    number:String
})

module.exports = mongoose.model("ejsPraveen", StuSchema);
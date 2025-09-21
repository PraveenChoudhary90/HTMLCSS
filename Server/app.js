const express = require("express");
const app = express();
const cors  =require("cors");
const mongoose =require("mongoose");
const bodyParser  =require("body-parser");
const StuRoute = require ("./Routes/StuRoute");

app.use(cors());

// Parse incoming requests with JSON payloads
app.use(bodyParser.json());

// Parse incoming requests with urlencoded payloads
app.use(bodyParser.urlencoded({ extended: true }));


mongoose.connect("mongodb://localhost:27017/").then(()=>{
    console.log("DB IS CONNECTED")
})

app.use("/student", StuRoute);

app.listen(8000,()=>{
console.log("server is running on 8000 port"
)});
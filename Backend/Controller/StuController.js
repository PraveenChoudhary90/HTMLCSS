const StuModel = require("../Model/StuModel");


const Homepage  =async(req,res)=>{
    res.render("home");
}

const Aboutpage = async(req,res)=>{
    res.render("about");
}

const Insertpage = async(req,res)=>{
  res.render("insert");
}


const SaveData  =async(req,res)=>{
    const {name,email,city, number} =req.body;
    try {
        const Data = await StuModel.create({
            name:name,
            email:email,
            city:city,
            number:number
        })
    console.log(Data);
    } catch (error) {
        console.log(error)
    }
    res.render("insert");
}


const Dispalydata = async(req,res)=>{
    const data = await StuModel.find();
    console.log(data);
    res.render("display", {data:data});
}


module.exports  ={
    Homepage,
    Aboutpage,
    Insertpage,
    SaveData,
    Dispalydata
}
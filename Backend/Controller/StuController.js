

const Homepage  =async(req,res)=>{
    console.log(req.body);
    res.render("home");
}

const Aboutpage = async(req,res)=>{
    res.render("about");
}

const Insertpage = async(req,res)=>{
  res.render("insert");
}

module.exports  ={
    Homepage,
    Aboutpage,
    Insertpage
}
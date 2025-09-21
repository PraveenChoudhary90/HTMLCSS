


const InsertStudent  =async(req,res)=>{
    console.log(req.body);
    console.log(req.files);
    res.send("Okk");
}
module.exports = {
    InsertStudent
}
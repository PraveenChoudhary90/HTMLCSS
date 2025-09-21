const StuModel = require("../Model/StuModel");



const InsertStudent  =async(req,res)=>{
    const { name,email,city,number,state} = req.body;
    const ImgFile = req.files.map(file=>file.path);

    try {
        const Student = await StuModel.create({
            name:name,
            email:email,
            city:city,
            number:number,
            state:state,
            defaultImage:ImgFile[0],
            Image:ImgFile
        })
        res.status(200).send({msg:"Student save successfully"});
        console.log(Student);
    } catch (error) {
        console.log(error)
    }
}
module.exports = {
    InsertStudent
}
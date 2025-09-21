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


const Displaydata  =async(req,res)=>{
    const Data = await StuModel.find();
    res.send(Data);
    console.log(Data);
}

const DeleteData = async(req,res)=>{
    const {id} = req.body;
    const Data = await StuModel.findByIdAndDelete(id);
    res.send({msg:"Data delete successfully"});
}

module.exports = {
    InsertStudent,
    Displaydata,
    DeleteData
}
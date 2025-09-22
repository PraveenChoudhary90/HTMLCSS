import axios from "axios";
import { useEffect, useState } from "react";


const AddtoCart = ()=>{
    
    const [mydata, setMydata] = useState([]);

    const LoadData = async()=>{
        const api = "http://localhost:8000/student/addtocart";
        const response  = await axios.get(api);
        console.log(response.data); 
    }

    useEffect(()=>{
        LoadData();
    },[]);


    return(
        <>
        
        </>
    )
}

export default AddtoCart;
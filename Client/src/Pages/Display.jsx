import axios from "axios";
import { useEffect, useState } from "react";

const Display = ()=>{
    const [mydata, setMydata] = useState([]);

    const LoadData = async()=>{
        const api = "http://localhost:8000/student/display";
        const response = await axios.get(api);
        console.log(response.data);
        setMydata(response.data);
    } 

    useEffect(()=>{
        LoadData();
    },[]);

    

    return(
        <>
        
        </>
    )
}

export default Display;
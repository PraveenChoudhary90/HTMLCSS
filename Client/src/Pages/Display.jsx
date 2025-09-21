import axios from "axios";
import { useEffect, useState } from "react";
import Table from 'react-bootstrap/Table';


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

  const HandelDelete = async(id)=>{
    // console.log(id);
    const api = "http://localhost:8000/student/delete";
    try {
        const response  = await axios.post(api, {id:id});
        console.log(response.data);
        alert(response.data.msg);
    } catch (error) {
        console.log(error)
    }

  }


  const HandelUpdate = async(_id)=>{
    // console.log(_id);
    const api = "http://localhost:8000/student/update";
    try {
        
    } catch (error) {
        
    }

  }




  let count = 0;
    const ans = mydata.map(key=>{
        count++;
        return(
            <>
            <tr>
                <td>{count}</td>
                <td>
                    <img src={`http://localhost:8000/${key.defaultImage}`} alt="" width="150px" height="100px" />
                </td>
                <td>{key.name}</td>
                <td>{key.email}</td>
                <td>{key.city}</td>
                <td>{key.number}</td>
                <td>{key.state}</td>
                <td onClick={()=>{HandelDelete(key._id)}} >Delete</td>
                <td onClick={()=>{HandelUpdate(key._id)}}>Update</td>
            </tr>
            </>
        )
    })

    return(
        <>
         <Table striped bordered hover>
      <thead>
        <tr>
          <th>Count</th>
          <th>Image</th>
          <th>Name</th>
          <th>Email</th>
          <th>City</th>
          <th>Number</th>
          <th>State</th>
          <th>Delete</th>
          <th>Update</th>
        </tr>
      </thead>
      <tbody>
        {ans}
      </tbody>
      </Table>
        </>
    )
}

export default Display;
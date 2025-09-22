import axios from "axios";
import { useEffect, useState } from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useDispatch } from "react-redux";
import { Addtocart } from "../CartSlice";

const AddtoCart = ()=>{
    
    const [mydata, setMydata] = useState([]);

    const dispatch = useDispatch();
    

    const LoadData = async()=>{
        const api = "http://localhost:8000/student/addtocart";
        const response  = await axios.get(api);
        console.log(response.data);
        setMydata(response.data); 
    }

    useEffect(()=>{
        LoadData();
    },[]);

  const ans = mydata.map(key=>{
    return(
        <>
         <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={`http://localhost:8000/${key.defaultImage}`} width="100" height="200" />
      <Card.Body>
        <Card.Title>Student Card</Card.Title>
        <Card.Text>
          <h4>{key.name}</h4>
          <h4>{key.email}</h4>
          <h4>{key.city}</h4>
          <h4>{key.number}</h4>
          <h4>{key.state}</h4>
        </Card.Text>
        <Button variant="warning" onClick={()=>{dispatch(Addtocart({id:key._id, name:key.name, email:key.email, 
            city:key.city, number:key.number, state:key.state, 
            defaultImage:key.defaultImage, image:key.Image, qty:1}))}}>Add To Cart</Button>
      </Card.Body>
    </Card>
        </>
    )
  })


    return(
        <>
        <div id="cart">
            {ans}
        </div>
        </>
    )
}

export default AddtoCart;
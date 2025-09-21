import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import axios from "axios";


const Insert = ()=>{

     const [input, setInput] = useState("");
     const [image, setImage] = useState("");


     const HandelInput = (e)=>{
        const name = e.target.name;
        const value = e.target.value;
        setInput(values=>({...values, [name]:value}))
        console.log(input);

     }

     const HandelImage = (e)=>{
      setImage(e.target.files);
      console.log(image);

     }

     const HandelSubmit =async (e)=>{
        e.preventDefault();
        const formData = new FormData(); 

       for(let key in input){
        formData.append(key, input[key]);
       }


         for(let i =0;i<length.image;i++){
          formData.append("image", image[i]);
         }




        const api = "http://localhost:8000/student/insert";
        try {
          const response = await axios.post(api, formData);
          console.log(response.data);
          
        } catch (error) {
          console.log(error);
        }

     }


    return(
        <>
        <div id="from">
        <h1>Insert Page</h1>
         <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter Student Name</Form.Label>
        <Form.Control type="text" name='name' value={input.name} onChange={HandelInput} />
      </Form.Group>

       <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter Email</Form.Label>
        <Form.Control type="email" name='email' value={input.email} onChange={HandelInput}  />
      </Form.Group>

       <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter City </Form.Label>
        <Form.Control type="text" name='city' value={input.city} onChange={HandelInput}  />
      </Form.Group>

       <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter Number</Form.Label>
        <Form.Control type="number" name='number' value={input.number} onChange={HandelInput}  />
      </Form.Group>

       <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter State</Form.Label>
        <Form.Control type="text" name='state' value={input.state} onChange={HandelInput}  />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Picture</Form.Label>
        <Form.Control type="file" multiple onChange={HandelImage} />
      </Form.Group>
      <Button variant="primary" type="submit" onClick={HandelSubmit}>
        Submit
      </Button>
    </Form>
    </div>
        </>
    )
}

export default Insert;
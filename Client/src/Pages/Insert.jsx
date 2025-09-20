import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


const Insert = ()=>{

     const [input, setInput] = useState("");
     const [image, setImage] = useState("");


     const HandelInput = (e)=>{
        const name = e.target.name;
        const value = e.target.value;
        setInput(values=>({...values, [name]:value}))
        console.log(input);

     }

     const HandelImage = ()=>{

     }

     const HandelSubmit = (e)=>{
        e.preventDefault();

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
      <Button variant="primary" type="submit" onSubmit={HandelSubmit}>
        Submit
      </Button>
    </Form>
    </div>
        </>
    )
}

export default Insert;
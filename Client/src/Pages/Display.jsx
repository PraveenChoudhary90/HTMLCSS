import axios from "axios";
import { useEffect, useState } from "react";
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';


const Display = ()=>{
    const [mydata, setMydata] = useState([]);
    const[input, setInput] = useState([]);

      const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);



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
    setShow(true);
    const api = "http://localhost:8000/student/update";
    try {
        const response = await axios.post(api, {_id});
        console.log(response.data);
        setInput(response.data);
    } catch (error) {
        console.log(error);
    }

  }



  const HandelUpdateSubmit =async (e)=>{
    // e.preventDefault();
    const api = "http://localhost:8000/student/updatefrom";
    const response = await axios.post(api,input);
    console.log(response.data);
    alert(response.data.msg);
    // alert("updata student details");
    setShow(false);
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


      

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Student Model Update</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            
             <div id="from1">
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
      <Button variant="primary" type="submit" onClick={HandelUpdateSubmit}>
        Submit
      </Button>
    </Form>
    </div>
            
        </Modal.Body>
      </Modal>




      

        </>
    )
}

export default Display;
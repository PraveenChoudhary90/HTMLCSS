import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


const Insert = ()=>{
    return(
        <>
        <div id="from">
        <h1>Insert Page</h1>
         <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter Student Name</Form.Label>
        <Form.Control type="text"  />
      </Form.Group>

       <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter Email</Form.Label>
        <Form.Control type="email"  />
      </Form.Group>

       <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter City </Form.Label>
        <Form.Control type="text"  />
      </Form.Group>

       <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter Number</Form.Label>
        <Form.Control type="number"  />
      </Form.Group>

       <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter State</Form.Label>
        <Form.Control type="text"  />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Picture</Form.Label>
        <Form.Control type="file"  />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    </div>
        </>
    )
}

export default Insert;
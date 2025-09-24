import { useSelector } from "react-redux";
import Table from 'react-bootstrap/Table';
const CartData = ()=>{
    const Product = useSelector(state=>state.mycart.Cart);

  let count = 0;
   const ans  =Product.map(key=>{
    count = count+1;
    return(
        <>
        <tr>
            <td>{key.count}</td>
            <td><img src={`http://localhost:8000/${key.defaultImage}`} alt="" width="80" height="90" /></td>
            <td>{key.name}</td>
            <td>{key.email}</td>
            <td>{key.city}</td>
            <td>{key.number}</td>
            <td>{key.state}</td>
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
        </tr>
      </thead>
      <tbody>
        {ans}
     </tbody>
        </Table>

        </>
    )
}

export default CartData;
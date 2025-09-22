import { useSelector } from "react-redux";

const CartData = ()=>{
    const Product = useSelector(state=>state.mycart.Cart);
    return(
        <>
        <tr>
            {Product}
        </tr>
        </>
    )
}

export default CartData;
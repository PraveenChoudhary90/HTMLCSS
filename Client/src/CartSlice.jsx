import { createSlice } from "@reduxjs/toolkit";

const Card = createSlice({
    name:"my",
    initialState:{
        Cart:[]
    },
    reducers:{
        Addtocart:(state, actions)=>{
         console.log(actions.payload);
         const MyData = state.Cart.filter(key=>key.id===actions.payload.id)
         if(MyData.length>=1){
            alert("data alreay added");
         }
         else{
            state.Cart.push(actions.payload);
         }
        }
    }
})

 export const {Addtocart} = Card.actions;
 export default Card.reducer;
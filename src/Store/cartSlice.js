import { createSlice } from "@reduxjs/toolkit"
import Swal from "sweetalert2";


let dataFromweb = JSON.parse(localStorage.getItem("cart"))

const cartSlice = createSlice({ 
    name: "cart",
    initialState: dataFromweb,
    reducers: {
        addItem(state, action) {
            // console.log(action.payload);
            
            state.push(action.payload)
            localStorage.setItem("cart",JSON.stringify([...state]))
            
        },
        removeItem(state, action) {
            let itemId=action.payload
            let newProducts=state.filter(cartProducts=>cartProducts.id !==itemId)
            localStorage.setItem("cart",JSON.stringify([...newProducts]))
            Swal.fire({
                        title: "Succes!",
                        text: "Product Removed Succesfully.",
                        icon: "success",
                      });
            return newProducts
            
        }
    }
})

export default cartSlice.reducer

export let { addItem,removeItem}=cartSlice.actions
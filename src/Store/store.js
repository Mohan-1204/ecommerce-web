import { configureStore } from "@reduxjs/toolkit"
import cartSliceReduc from "./cartSlice"
 
export const store = configureStore({
    reducer: {
        cart : cartSliceReduc
    }
})
import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "features/addToCart/cartSlice";
export const store = configureStore({
    reducer: {
        cart: cartReducer,
    },
});

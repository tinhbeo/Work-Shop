import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    store: [],
};
export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addProduct: (state, action) => {
            state.store.push(action.payload);
        },

        deleteProduct: (state, action) => {
            return {
                ...state,
                store: state.store.filter((item) => item.id !== action.payload),
            };
        },
        updateCart: (state, action) => {
            return {
                ...state,
                store: state.store.map((item) => {
                    if (item.id === action.payload.id) {
                        return {
                            ...item,
                            quantity: action.payload.quantity,
                        };
                    }
                    return item;
                }),
            };
        },
        clearCart: (state) => {
            return {
                ...state,
                store: [],
            };
        },
    },
});

export const { addProduct, deleteProduct, updateCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;

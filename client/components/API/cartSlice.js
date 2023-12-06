import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")) : [],
    reducers: {
        setCart: (state, { payload }) => {
            for (let i = 0; i < state.length; i++) {
                if(state[i].productId === payload.productId) {
                    state[i].quantity += payload.quantity;
                    localStorage.setItem("cart", JSON.stringify(state));
                    return;
                }
            }
            state.push({
                productId: payload.productId,
                quantity: payload.quantity
            });
            localStorage.setItem("cart", JSON.stringify(state));
        },
        updateCart: (state, { payload }) => {
            for (let i = 0; i < state.length; i++) {
                if(state[i].productId === payload.productId) {
                    if (payload.quantity === 0) {
                        state.splice(i, 1);
                        return;
                    }
                    state[i].quantity = payload.quantity;
                    return;
                }
            }
        },
        emptyCart: (state) => {
            state.splice(0, state.length);
        }
    },
});

export default cartSlice.reducer;

export const {setCart, updateCart, emptyCart} = cartSlice.actions;


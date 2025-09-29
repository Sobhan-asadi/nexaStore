import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    items: [],
    totalAmount: 0,
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart(state, action) {
            const newProduct = action.payload;

            const index = state.items.findIndex(item => item.id === newProduct.id);

            if (index > -1) {
                state.items[index].total += 1;
                state.items[index].pluralItems = state.items[index].price * state.items[index].total;
            } else {
                state.items.push({ ...newProduct, total: 1, pluralItems: newProduct.price });
            }


            state.totalAmount = state.items.reduce((sum, item) => sum + item.pluralItems, 0);
        }
    }
});

export default cartSlice.reducer;
export const cartActions = cartSlice.actions;

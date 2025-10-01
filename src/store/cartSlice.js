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
                state.items[index].quantity += 1;
                state.items[index].pluralItems = state.items[index].price * state.items[index].quantity;
            } else {
                state.items.push({ ...newProduct, quantity: 1, pluralItems: newProduct.price });
            }

            state.totalAmount = state.items.reduce((sum, item) => sum + item.pluralItems, 0);
        },
        //  increase
        increase(state, action) {

            const index = state.items.findIndex(item => item.id === action.payload.id);

            if (index > -1) {
                state.items[index].quantity += 1;
                state.items[index].pluralItems = state.items[index].price * state.items[index].quantity;
            }

            state.totalAmount = state.items.reduce((sum, item) => sum + item.pluralItems, 0);
        },
        // decrease
        decrease(state, action) {
            const index = state.items.findIndex(item => item.id === action.payload.id);

            if (index > -1) {
                state.items[index].quantity -= 1;
                state.items[index].pluralItems = state.items[index].price * state.items[index].quantity;

                if (state.items[index].quantity === 0) {
                    state.items.splice(index, 1);
                }
            }

            state.totalAmount = state.items.reduce((sum, item) => sum + item.pluralItems, 0);
        },

        removeItem(state, action) {
            const index = state.items.findIndex(item => item.id === action.payload.id);
            state.items.splice(index, 1);

        }

    }
});

export default cartSlice.reducer;
export const cartActions = cartSlice.actions;


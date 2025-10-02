
import { createSlice } from "@reduxjs/toolkit";


const loadCartFromStorage = () => {
    const saved = localStorage.getItem("cart");
    return saved ? JSON.parse(saved) : { items: [], totalAmount: 0 };
};

const saveCartToStorage = (state) => {
    localStorage.setItem("cart", JSON.stringify(state));
};

const cartSlice = createSlice({
    name: 'cart',
    initialState: loadCartFromStorage(),
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
            saveCartToStorage(state);
        },

        increase(state, action) {
            const index = state.items.findIndex(item => item.id === action.payload.id);
            if (index > -1) {
                state.items[index].quantity += 1;
                state.items[index].pluralItems = state.items[index].price * state.items[index].quantity;
            }
            state.totalAmount = state.items.reduce((sum, item) => sum + item.pluralItems, 0);
            saveCartToStorage(state);
        },

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
            saveCartToStorage(state);
        },

        removeItem(state, action) {
            const index = state.items.findIndex(item => item.id === action.payload.id);
            if (index > -1) {
                state.items.splice(index, 1);
            }
            state.totalAmount = state.items.reduce((sum, item) => sum + item.pluralItems, 0);
            saveCartToStorage(state);
        },

        clearCart(state) {
            state.items = [];
            state.totalAmount = 0;
            localStorage.removeItem("cart");
        }
    },

});

export const cartActions = cartSlice.actions;
export default cartSlice.reducer;

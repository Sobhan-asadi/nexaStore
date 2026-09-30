import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

const wishlistSlice = createSlice({
  name: "wishlist",

  initialState,

  reducers: {
    toggleWishlist(state, action) {
      const product = action.payload;

      const existingItem = state.items.find((item) => item.id === product.id);

      if (existingItem) {
        state.items = state.items.filter((item) => item.id !== product.id);

        return;
      }

      state.items.push(product);
    },

    removeFromWishlist(state, action) {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },

    clearWishlist(state) {
      state.items = [];
    },
  },
});

export const wishlistActions = wishlistSlice.actions;

export default wishlistSlice.reducer;

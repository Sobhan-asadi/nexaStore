import { configureStore } from "@reduxjs/toolkit";

import cartReducer from "./cartSlice";
import wishlistReducer from "./wishlistSlice";

const CART_STORAGE_KEY = "nexa-cart";
const WISHLIST_STORAGE_KEY = "nexa-wishlist";

function loadStoredItems(storageKey) {
  try {
    const storedItems = localStorage.getItem(storageKey);

    if (!storedItems) {
      return [];
    }

    const parsedItems = JSON.parse(storedItems);

    return Array.isArray(parsedItems) ? parsedItems : [];
  } catch {
    return [];
  }
}

const preloadedState = {
  cart: {
    items: loadStoredItems(CART_STORAGE_KEY),
  },

  wishlist: {
    items: loadStoredItems(WISHLIST_STORAGE_KEY),
  },
};

const store = configureStore({
  reducer: {
    cart: cartReducer,
    wishlist: wishlistReducer,
  },

  preloadedState,
});

store.subscribe(() => {
  try {
    const state = store.getState();

    localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(state.cart.items));

    localStorage.setItem(
      WISHLIST_STORAGE_KEY,
      JSON.stringify(state.wishlist.items),
    );
  } catch {
    //
  }
});

export default store;

import { configureStore } from "@reduxjs/toolkit";

import cartReducer from "./cartSlice";

const CART_STORAGE_KEY = "nexa-cart";

function loadCart() {
  try {
    const storedCart = localStorage.getItem(CART_STORAGE_KEY);

    if (!storedCart) {
      return undefined;
    }

    const parsedCart = JSON.parse(storedCart);

    if (!Array.isArray(parsedCart)) {
      return undefined;
    }

    return {
      cart: {
        items: parsedCart,
      },
    };
  } catch {
    return undefined;
  }
}

const store = configureStore({
  reducer: {
    cart: cartReducer,
  },

  preloadedState: loadCart(),
});

store.subscribe(() => {
  try {
    localStorage.setItem(
      CART_STORAGE_KEY,
      JSON.stringify(store.getState().cart.items),
    );
  } catch {
    // The cart still works during the current session
    // if browser storage is unavailable.
  }
});

export default store;

import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";
import productsSlice from "./productsSlice";

export const store = configureStore({
  // both slices are configured in a singke store
  reducer: {
    cart: cartSlice,
    product: productsSlice,
  },
});

import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: localStorage.getItem("cartItems")
    ? JSON.parse(localStorage.getItem("cartItems"))
    : [],
  reducers: {
    // this add action will be called to add the product to the cart via  dispatch function
    add(state, action) {
      // the new product is getting pushd to the cart/older state
      state.push(action.payload);
      // its algo getting updated in local storage tp get persisting data
      localStorage.setItem("cartItems", JSON.stringify(state));
    },
    // this add action will be called to remove the product from the cart via  dispatch function
    remove(state, action) {
      // this removes the product from local storage via filter method
      localStorage.setItem(
        "cartItems",
        JSON.stringify(state.filter((item) => item.id !== action.payload))
      );
      // and this will return a  state with the new array of products
      return state.filter((item) => item.id !== action.payload);
    },
  },
});

// cart actions like add and remove is exported whick can be inported and used in pages
export const cartAction = cartSlice.actions;
// this export will be neede for store to configure the slice
export default cartSlice.reducer;

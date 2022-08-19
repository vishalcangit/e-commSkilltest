import { createSlice } from "@reduxjs/toolkit";

export const STATUSES = Object.freeze({
  IDLE: "idle",
  ERROR: "error",
  LOADING: "loading",
});

const productsSlice = createSlice({
  name: "products",
  initialState: {
    data: [],
    status: STATUSES.IDLE,
    isSorted: false,
    selectedProduct: [],
  },
  reducers: {
    setProducts(state, action) {
      state.data = action.payload;
    },
    setStatus(state, action) {
      state.status = action.payload;
    },
    sort(state, action) {
      if (action.payload === true) {
        state.isSorted = true;
        state.data = state.data.sort((a, b) => {
          return a.price > b.price ? 1 : -1;
        });
      } else {
        state.isSorted = false;
        state.data = state.data.sort((a, b) => {
          return a.id > b.id ? 1 : -1;
        });
      }
    },
    select(state, action) {
      state.selectedProduct = state.data[action.payload - 1];
    },
  },
});

export const productsAction = productsSlice.actions;
export default productsSlice.reducer;

// thunks
export function fetchProducts() {
  return async function fetchProductsThunk(dispatch, getState) {
    dispatch(productsAction.setStatus(STATUSES.LOADING));

    try {
      const response = await fetch(
        "https://my-json-server.typicode.com/vishalcangit/e-commerce_database/items"
      );
      const data = await response.json();

      dispatch(productsAction.setProducts(data));
      dispatch(productsAction.setStatus(STATUSES.IDLE));
    } catch (error) {
      console.log(error);
      dispatch(productsAction.setStatus(STATUSES.ERROR));
    }
  };
}

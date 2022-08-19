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
    // set the products after fetching from the api to the data array
    setProducts(state, action) {
      state.data = action.payload;
    },
    // will manage errors showing
    setStatus(state, action) {
      state.status = action.payload;
    },
    // this action will manage the dort feature
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
    // this will manage the data to pages like product details and edit products
    select(state, action) {
      state.selectedProduct = state.data[action.payload - 1];
    },
  },
});

// product actions like setProducts,sort,status,select is exported whick can be imported and used in pages
export const productsAction = productsSlice.actions;
// this export will be needed for store to configure the slice
export default productsSlice.reducer;

// this is thunk middleware function call as we cannot call async function in reducers so this is used
// thunks
export function fetchProducts() {
  return async function fetchProductsThunk(dispatch, getState) {
    dispatch(productsAction.setStatus(STATUSES.LOADING));

    try {
      const response = await fetch(
        // the dummy api which i have created
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

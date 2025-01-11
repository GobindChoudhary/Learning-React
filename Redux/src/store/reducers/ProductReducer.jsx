import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  Product: [],
};
const productSlice = createSlice({
  name: "Product",
  initialState,
  reducers: {
    getProduct: (state, action) => {
      console.log(action.payload);
      state.Product = action.payload;
      console.log(action.payload);
    },
    productDelete: (state, action) => {
      state.Product = state.Product.filter(
        (user) => user.id !== action.payload
      );
    },
  },
});
export default productSlice.reducer;
export const { getProduct, productDelete } = productSlice.actions;

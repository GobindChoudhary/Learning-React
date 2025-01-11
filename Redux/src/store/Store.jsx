import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../store/reducers/UserReducers";
import productReducer from "../store/reducers/ProductReducer";

export const store = configureStore({
  reducer: {
    userReducer: userReducer,
    productReducer: productReducer,
  },
});

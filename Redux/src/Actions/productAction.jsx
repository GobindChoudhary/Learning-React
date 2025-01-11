import axios from "axios";
import { getProduct } from "../store/reducers/ProductReducer";
const asyncGetProducts = () => (dispatch, getState) => {
  axios.get("https://fakestoreapi.com/products").then((response) => {
    const products = Object.values(response)[0];
    dispatch(getProduct(products));
    console.log(products);
  });
};
export default asyncGetProducts;

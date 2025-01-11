import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import asyncGetProducts from "../Actions/productAction";
import { store } from "../store/Store";
import { MdDelete } from "react-icons/md";
import { productDelete } from "../store/reducers/ProductReducer";

const Products = () => {
  const data = useSelector((state) => state.productReducer);
  console.log(data);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(asyncGetProducts());
  }, []);
  const deleteHandler = (id) => dispatch(productDelete(id));

  return (
    <div className=" min-h-screen w-full bg-gray-900">
      <h1 className="text-red-200 text-4xl font-bolder mb-10">Product</h1>
      <ul>
        {data.Product.map((product) => (
          <li className="text-white" key={product.id}>
            {product.title}
            <span className="inline-block">
              <MdDelete
                className=" ml-4 cursor-pointer"
                onClick={() => deleteHandler(product.id)}
              />
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default Products;

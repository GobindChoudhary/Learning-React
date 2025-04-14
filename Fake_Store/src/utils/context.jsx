import React from "react";
import axios from "./axios";
import { createContext, useEffect, useState } from "react";

export const ProductContext = createContext();

const Context = (props) => {
  const [products, setProducts] = useState(
    JSON.parse(localStorage.getItem("products")) || [] // Default to an empty array
  );

  const getProducts = async () => {
    try {
      const { data } = await axios("/products");
      setProducts(data); // Update state with fetched data
      localStorage.setItem("products", JSON.stringify(data)); // Save fetched data to localStorage
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    if (!products || products.length === 0) {
      // Fetch products only if not already in localStorage
      getProducts();
    }
  }, [products]);

  return (
    <ProductContext.Provider value={[products, setProducts]}>
      {props.children}
    </ProductContext.Provider>
  );
};

export default Context;

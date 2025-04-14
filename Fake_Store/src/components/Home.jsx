import React, { useContext, useEffect, useState } from "react";
import { ProductContext } from "../utils/context";
import { Link, useLocation } from "react-router-dom";
import Nav from "./Nav";
import Loader from "../utils/Loader";

const Home = () => {
  const [products] = useContext(ProductContext); // Original list of products
  const { search } = useLocation(); // Get query parameters
  const category = decodeURIComponent(search.split("=")[1] || ""); // Decode category from query string
  const [filteredProducts, setFilteredProducts] = useState([]);

  // Filter products by category
  useEffect(() => {
    if (category && category !== "undefined") {
      // Filter products locally
      const filtered = products.filter(
        (product) => product.category === category
      );
      setFilteredProducts(filtered);
    } else {
      setFilteredProducts(products);
      // Default to all products
    }
  }, [category, products]);

  return filteredProducts.length > 0 ? (
    <div className="h-screen w-full flex">
      <Nav />
      <div className="h-full w-[85%] py-8 flex justify-center bg-slate-200 flex-wrap overflow-y-scroll">
        {filteredProducts.map((product) => (
          <Link
            to={`/${product.id}`}
            key={product.id}
            className="h-72 w-[20%] m-4 p-2 drop-shadow-xl bg-white rounded-md overflow-hidden"
          >
            <div
              style={{
                backgroundImage: `url(${product.image})`,
              }}
              className="h-[70%] w-full bg-contain bg-no-repeat bg-center"
            ></div>
            <div className="h-[30%] p-2 text-center">
              <h3 className="text-sm font-medium">{product.title}</h3>
            </div>
          </Link>
        ))}
      </div>
    </div>
  ) : (
    <Loader />
  );
};

export default Home;

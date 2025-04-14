import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ProductContext } from "../utils/context";

const Nav = () => {
  const [products] = useContext(ProductContext);
  let distinct_category = products.reduce(
    (acc, item) => [...acc, item.category],
    []
  );
  distinct_category = [...new Set(distinct_category)];

  return (
    <div className="w-[20%] min-h-screen bg-slate-100 p-6 drop-shadow-md shadow-xl border-r-2">
      <div className="w-full mb-6 flex justify-center">
        <Link
          to="/Create"
          className="text-white font-bold py-2 px-4 rounded bg-blue-700 hover:bg-blue-900 transition duration-300 ease-in-out transform hover:scale-105"
        >
          Add Product
        </Link>
      </div>
      <hr className="border-gray-400 mb-6" />
      {distinct_category.map((category, i) => (
        <Link
          key={i}
          to={`/?category=${category}`}
          className="flex  items-center  mb-4 p-2 capitalize rounded-lg bg-blue-500 hover:bg-blue-700 text-gray-100 hover:text-white transition duration-300 ease-in-out transform hover:scale-105"
        >
          <h2 className="text-md">{category}</h2>
        </Link>
      ))}
    </div>
  );
};

export default Nav;

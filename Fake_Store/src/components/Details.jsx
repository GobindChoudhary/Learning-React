import React, { useContext } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { ProductContext } from "../utils/context";

const Details = () => {
  const { id } = useParams();
  const [products, setProducts] = useContext(ProductContext);
  const navigate = useNavigate();

  const deleteProductHandler = () => {
    const updatedProducts = products.filter(
      (product) => product.id !== parseInt(id)
    );
    setProducts(updatedProducts);
    navigate("/"); // Navigate back to the home or product list page
  };

  const product = products.find((product) => product.id === parseInt(id));

  if (!product) return <p>Product not found.</p>; // Handle invalid product ID

  return (
    <div>
      <div className="w-[70%] h-screen m-auto flex items-center">
        <div className="h-[50%] w-full flex shadow-2xl">
          <div
            style={{
              backgroundImage: `url(${product.image})`,
            }}
            className="h-full w-[45%] bg-contain py-12 bg-no-repeat bg-center object-fit"></div>
          <div className="details w-[55%] pr-12">
            <h1 className="text-2xl font-medium m-2">{product.title}</h1>
            <h5 className="text-sm font-bold text-slate-500 m-2">
              {product.category}
            </h5>
            <span className="text-red-300">{product.price}</span>
            <p className="text-sm font-medium m-2">{product.description}</p>
            <Link
              to={`/edit/${product.id}`}
              className="bg-blue-500 text-white px-4 m-2 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300">
              Edit
            </Link>
            <button
              onClick={deleteProductHandler}
              className="bg-red-500 text-white px-4 py-2 m-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300">
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;

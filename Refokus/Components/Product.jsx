import React from "react";
import Button from "./Button";
const Product = ({ product }) => {
  return (
    <div className="w-full py-20 text-white ">
      <div className="max-w-screen-xl mx-auto flex items-center justify-between">
        <h1 className="text-6xl Capitalize font-medium">{product.title}</h1>
        <div className="w-1/3  ">
          <p className="mb-10">{product.description}</p>
          <div className="flex gap-5">
            {product.live && <Button />}
            {product.caseStudy && <Button buttonText={"case study"} />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;

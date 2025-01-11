import React from "react";
import Product from "./Product";

const Products = () => {
  const products = [
    {
      title: "Avtaar",
      description:
        " hi kdk jsfj jsijfj asfjoj sjfj  sojfap paofjp gobind dofnslokf gobind sfob gobind dobind ",
      live: true,
      caseStudy: false,
    },
    {
      title: "Avtaar",
      description:
        " hi kdk jsfj jsijfj asfjoj sjfj  sojfap paofjp gobind dofnslokf gobind sfob gobind dobind ",
      live: true,
      caseStudy: false,
    },
    {
      title: "Avtaar",
      description:
        " hi kdk jsfj jsijfj asfjoj sjfj  sojfap paofjp gobind dofnslokf gobind sfob gobind dobind ",
      live: true,
      caseStudy: true,
    },
    {
      title: "Avtaar",
      description:
        " hi kdk jsfj jsijfj asfjoj sjfj  sojfap paofjp gobind dofnslokf gobind sfob gobind dobind ",
      live: true,
      caseStudy: true,
    },
  ];
  return (
    <div className="my-32">
      {products.map((product, index) => (
        <Product key={index} product={product} />
      ))}
    </div>
  );
};

export default Products;

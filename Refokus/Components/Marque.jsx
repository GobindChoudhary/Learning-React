import React from "react";

const Marque = ({ images }) => {
  return (
    <div className="flex w-52 gap-10 my-12  filter invert  ">
      {images.map((url, index) => (
        <img src={url} alt={index} className="flex-shrink-0" />
      ))}
    </div>
  );
};

export default Marque;

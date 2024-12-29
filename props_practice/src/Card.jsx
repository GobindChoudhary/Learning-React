import React from "react";

const Card = ({ data, index, key, handleClick }) => {
  const { name, artist, image, added } = data;
  return (
    <>
      <div className="h-28 w-44 relative bg-red-300 rounded-xl flex items-center justify-around">
        <div className="h-16 w-16 bg-gray-300 overflow-hidden ">
          <img className="h-full w-full object-cover" src={image} alt={name} />
        </div>
        <div className="">
          <h3>{name}</h3>
          <h3>{artist}</h3>
        </div>

        <button
          onClick={() => handleClick(index)}
          className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 w-28 h-10 rounded-full ${
            added ? "bg-green-300" : "bg-blue-300"
          } flex justify-center items-center font-bold text-xs`}>
          {added ? "added" : "Add to favorite"}
        </button>
      </div>
    </>
  );
};

export default Card;

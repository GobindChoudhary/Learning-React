import React from "react";

const Card = ({ index, user, handleClick }) => {
  return (
    <div className="h-60 w-36  bg-white rounded-lg overflow-hidden shadow-lg border p-4">
      <img
        src={user.image}
        alt={user.name}
        className="w-24 h-24 rounded-full mx-auto object-cover"
      />
      <div className="text-center mt-4">
        <h2 className="text-lg font-semibold text-gray-800">{user.name}</h2>
        <p className="text-gray-600 text-xs">{user.email}</p>
      </div>
      <div className="flex justify-center items-center mt-4">
        <button
          onClick={() => handleClick(index)}
          className="bg-blue-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
          remove
        </button>
      </div>
    </div>
  );
};

export default Card;

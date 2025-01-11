import React from "react";
import { FiCornerDownRight } from "react-icons/fi";
const Button = ({ buttonText = "get started" }) => {
  return (
    <>
      <div className="max-w-40 h-8 px-4 py-2 bg-zinc-100 text-black flex items-center justify-between    rounded-full">
        <span className="text-sm font-regular">{buttonText}</span>
        <FiCornerDownRight className="text-xs" />
      </div>
    </>
  );
};

export default Button;

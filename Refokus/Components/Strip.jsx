import React from "react";

const Strip = ({ data }) => {
  const { img, num } = data;
  return (
    <div className="flex items-center w-[16.66%]  justify-between px-4 py-3 border-t-[1px] border-r-[1px] border-b-[1px] border-zinc-600 ">
      <span className="h-8 w-20 filter invert   flex items-center">
        <img src={img} alt="" />
      </span>
      <div className="text-semibold">{num}</div>
    </div>
  );
};

export default Strip;

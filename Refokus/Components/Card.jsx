import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
const Card = ({ width, start, para, hover, heading, info }) => {
  return (
    <div
      className={`bg-zinc-800 ${width} hover:${hover}  p-5 rounded-xl min-h-[23rem] flex flex-col justify-between `}>
      <div>
        <div className=" w-full flex justify-between items-center ">
          <span className="text-sm text-zinc-500">{info}</span>
          <FaArrowRightLong />
        </div>
        <h1 className=" text-3xl font-medium mt-5">{heading}</h1>
      </div>

      <div>
        {start && (
          <>
            <div className=" flex  font-medium text-7xl">Start a Project</div>
            <div className=" flex items-center text-sm text-white px-6 border-2 border-white max-w-32 h-10 mt-4   rounded-full ">
              Contact Us
            </div>
          </>
        )}

        {para && (
          <>
            <p className="text-sm text-zinc-500">
              Lorem ipsum dolor, sit amet adipisicing .
            </p>
          </>
        )}
      </div>
    </div>
  );
};

export default Card;

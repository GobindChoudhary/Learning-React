import React from "react";
import Button from "./Button";

const Navbar = () => {
  return (
    <div className="max-w-screen-lg mx-auto h-14 bg--900 p-4 border-b-2 border-zinc-700 flex items-center justify-between">
      <div className="flex items-center">
        {/* image */}
        <div className="h-8 w-20 flex items-center mr-20">
          <img
            src="https://imgs.search.brave.com/iJcxOYq6tq7GXiRSuGtfhAHhCrZVXRK2TM2c6BfiEsU/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/cHJvZC53ZWJzaXRl/LWZpbGVzLmNvbS82/MGQ0OTM2ZGM2YTRl/YjIxNjZkMGYxMTQv/NjEwN2IyYWNmNmVk/MGU0YWM3N2I1NjYz/X0xvZ28uc3Zn"
            alt="logo"
          />
        </div>
        {/* Nav Links */}
        <div className="links flex items-center gap-10  capitalize">
          {["home", "work", "culture", "", "News"].map((item, index) => (
            <a
              key={index}
              href="#"
              className=" flex items-center text-sm text-white ">
              {index === 1 && (
                <span
                  style={{ boxShadow: "0 0 0.23em #00ff19" }}
                  className=" inline-block h-1 w-1 bg-green-500 rounded-full m-1   "></span>
              )}
              {item.length === 0 ? (
                <span className="w-[1px] h-4 bg-zinc-700 "></span>
              ) : (
                item
              )}
            </a>
          ))}
        </div>
      </div>
      {/* Button */}
      <Button buttonText={"Start a Project"} />
    </div>
  );
};

export default Navbar;

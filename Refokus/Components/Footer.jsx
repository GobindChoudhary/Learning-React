import React, { act } from "react";

const Footer = () => {
  return (
    <div className=" w-full mt-20 ">
      <div className="max-w-screen-lg  mx-auto py-10 flex gap-20">
        <div className="basis-1/2  ">
          <h1 className="text-[9rem]  font-semibold leading-none tracking-tight">
            refokus.
          </h1>
        </div>
        <div className=" basis-1/2 flex gap-2">
          <div className="basis-1/3">
            <h4 className=" text-zinc-500 ">Social</h4>
            {["instragram", "twitter (x?)", "linkedIn"].map((socialLink) => (
              <a className="block mt-2 capitalize text-zinc-600 text-sm">
                {socialLink}
              </a>
            ))}
          </div>
          <div className="basis-1/3">
            <h4 className=" text-zinc-500 ">Sitemap</h4>
            {["home", "work", "careers", "contact"].map((socialLink) => (
              <a className="block mt-2 capitalize text-zinc-600 text-sm">
                {socialLink}
              </a>
            ))}
          </div>
          <div className="basis-1/3 flex flex-col items-end">
            <p className="text-right">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Voluptates, veniam.
            </p>
            <img
              className="mt-8"
              src="https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/666359bafc1c77261cbab22d_633c148a8b25dcfcd2e387b2_61957e512832dbf5efe8cdc6_mural.svg"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

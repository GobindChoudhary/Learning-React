import React from "react";
import Strip from "./Strip";

const Strips = () => {
  const data = [
    {
      img: "https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/666359b8724afca0a36e7e8d_633c148cf63c4467416f9bea_61ee848c05ba9c9caff5fd64_yahoo.svg",
      num: "12",
    },
    {
      img: "https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/666359b850995827afaa8db4_633c148b9b819badd7bbcde8_627a8d3e69e23713762e6b34_Vector.svg",

      num: "12",
    },
    {
      img: "https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/666359ba3497cf06ff9e8f71_633c14899b819b7aafbbcde1_627a8da607be73fd13e76134_basf.svg",

      num: "12",
    },
    {
      img: "https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/666359bafc1c77261cbab22d_633c148a8b25dcfcd2e387b2_61957e512832dbf5efe8cdc6_mural.svg",

      num: "12",
    },
    {
      img: "https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/6697d485bb37c8fc880cdfad_bcgp-1.svg",

      num: "12",
    },
    {
      img: "https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/6697d300a4cce143f24735d3_sevdesk-black.svg",

      num: "12",
    },
  ];
  return (
    <div className="flex items-center justify-between mt-28">
      {data.map((item, index) => (
        <Strip data={item} key={index} />
      ))}
    </div>
  );
};

export default Strips;

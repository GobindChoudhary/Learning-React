import React from "react";
import Card from "./Card";

const Cards = () => {
  return (
    <div className="max-w-screen-lg mx-auto my-32  flex gap-1">
      <Card
        info={"Up next: Culture"}
        heading={"Who we are"}
        width={"basis-1/3"}
        start={false}
        para={true}
      />
      <Card
        info={"Get in touch"}
        heading={"Let's go to it, together."}
        width={"basis-2/3"}
        start={true}
        para={false}
        hover={"bg-violet-600"}
      />
    </div>
  );
};

export default Cards;

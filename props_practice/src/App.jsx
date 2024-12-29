import React, { useState } from "react";
import Card from "./Card.jsx";
const App = () => {
  const data = [
    {
      name: "ahista",
      artist: "Musarat",
      image:
        "https://plus.unsplash.com/premium_photo-1682125472704-ae4c0109747a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YWhpc3RhJTIwc29uZyUyMHBvc3RlcnxlbnwwfHwwfHx8MA%3D%3D",
      added: false,
    },
    {
      name: "DON",
      artist: "Diljit",
      image:
        "https://imgs.search.brave.com/TeU8QDZAvmFkCqal6Hdo9fvHiVtw5ZnPWxbTOSFmmEg/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/eW91dHViZS5jb20v/dmkvYThIZUF2SEJt/emsvMC5qcGc",
      added: false,
    },
    {
      name: "SIT DOWN ",
      artist: "Prem",
      image:
        "https://imgs.search.brave.com/gdHDbg2dABG9UgR-Hr9NoC0ydb0cO-IvKc7kfPHPyWc/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9kampv/aGFsLmNvbS5pbi9j/b250ZW50L21lZGlh/L2NvdmVycy8xMDE2/OS5qcGc",
      added: false,
    },
  ];
  const [added, setAdded] = useState(data);

  const handleAddButton = (cardIndex) => {
    setAdded((added) => {
      return added.map((item, index) => {
        if (index === cardIndex) {
          return { ...item, added: !item.added };
        }
        return item;
      });
    });
  };

  return (
    <>
      <div className="navbar flex justify-between items-center m-4 ">
        <h2 className="h-10 w-32 rounded-full bg-orange-200 text-xl text-orange-500 font-bold flex items-center justify-center">
          Orange
        </h2>
        <div className="h-10 w-32 rounded-full bg-orange-200 text-xs font-bold flex items-center justify-center gap-4">
          Favorite{" "}
          <h3 className="flex items-center justify-center h-5 w-5 rounded-full bg-orange-400">
            {added.filter((item) => item.added == true).length}
          </h3>
        </div>
      </div>
      <div className="flex gap-4 m-4">
        {added.map((item, index) => (
          <Card
            data={item}
            index={index}
            key={index}
            handleClick={handleAddButton}
          />
        ))}
      </div>
    </>
  );
};

export default App;

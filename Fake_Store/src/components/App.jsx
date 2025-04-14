import React from "react";
import { Link, Route, Routes, useLocation } from "react-router-dom";

import Home from "./Home";
import Details from "./Details";
import Create from "./Create";
import Edit from "./Edit";
const App = () => {
  const { search, pathname } = useLocation();

  return (
    <div>
      {(pathname != "/" || search.length > 0) && (
        <Link
          to="/"
          className="px-3 py-1 bg-gray-200 rounded-md text-red-600 absolute top-[1%] left-[20%]"
        >
          Home
        </Link>
      )}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:id" element={<Details />} />
        <Route path="/Create" element={<Create />} />
        <Route path="/edit/:id" element={<Edit />} />
      </Routes>
    </div>
  );
};

export default App;

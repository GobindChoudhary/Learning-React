import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../Home.jsx";
import About from "../About";
import Users from "../Users";
import UserDetails from "../UserDetails.jsx";
const Routing = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/About" element={<About />}></Route>
        <Route path="/Users" element={<Users />}></Route>
        <Route path="/Users/:name" element={<UserDetails />} />
      </Routes>
    </div>
  );
};

export default Routing;

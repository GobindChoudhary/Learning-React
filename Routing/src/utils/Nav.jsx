import React from "react";
import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <div>
      <nav className="bg-blue-600 text-white p-4 flex justify-between items-center">
        <NavLink
          className={(e) => {
            return [
              e.isActive ? "text-gray-950" : "",
              e.isActive ? "font-bold" : "",
            ].join(" ");
          }}
          to="/">
          Home
        </NavLink>
        <NavLink
          className={(e) => {
            return [
              e.isActive ? "text-gray-950" : "",
              e.isActive ? "font-bold" : "",
            ].join(" ");
          }}
          to="/Users">
          Users
        </NavLink>
        <NavLink
          className={(e) => {
            return [
              e.isActive ? "text-gray-950" : "",
              e.isActive ? "font-bold" : "",
            ].join(" ");
          }}
          to="/About">
          About
        </NavLink>
      </nav>
    </div>
  );
};

export default Nav;

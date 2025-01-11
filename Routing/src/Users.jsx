import React from "react";
import { Link, Outlet } from "react-router-dom";
const Users = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to="/Users/Gobind">Gobind</Link>
        </li>
        <li>
          <Link to="/Users/Rudra">Rudra</Link>
        </li>
      </ul>
      <p>This is the Users page.</p>
      <Outlet />
    </div>
  );
};

export default Users;

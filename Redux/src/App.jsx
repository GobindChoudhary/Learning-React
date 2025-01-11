import React from "react";
import { Route, Routes, Link } from "react-router-dom";
import Users from "../src/components/Users.jsx";
import Products from "../src/components/Products.jsx";
import Home from "../src/components/Home.jsx";
const App = () => {
  return (
    <div>
      <Link to="/">Home</Link> |<Link to="/users">Users</Link> |
      <Link to="/products">Products</Link>
      <hr />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/users" element={<Users />} />
        <Route path="/products" element={<Products />} />
      </Routes>
    </div>
  );
};

export default App;

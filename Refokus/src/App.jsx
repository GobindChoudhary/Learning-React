import React from "react";
import Navbar from "../Components/Navbar";
import Work from "../Components/Work";
import Strips from "../Components/Strips";
import Products from "../Components/Products";
import Marques from "../Components/Marques";
import Cards from "../Components/Cards";
import Footer from "../Components/Footer";

const App = () => {
  return (
    <div className="w-full min-h-screen bg-zinc-900 text-white">
      <Navbar />
      <Work />
      <Strips />
      <Products />
      <Marques />
      <Cards />
      <Footer />
    </div>
  );
};

export default App;

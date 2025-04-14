import { Route, Routes } from "react-router-dom";
import Home from "./assets/components/Home";
import Trending from "./assets/components/Trending";

export const App = () => {
  return (
    <div className="bg-[#1F1E24] ">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/trending" element={<Trending />} />
      </Routes>
    </div>
  );
};
export default App;

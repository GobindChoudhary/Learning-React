import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Topnav from "./partial/Topnav";
import Dropdown from "./partial/Dropdown";
import axios from "../../utils/instance";
import Cards from "./partial/Cards";
import Loader from "../../utils/Loader";
import InfiniteScroll from "react-infinite-scroll-component";

const Trending = () => {
  const navigate = useNavigate();
  const [trending, settrending] = useState([]);
  const [category, setcategory] = useState("all");
  const [duration, setduration] = useState("day");

  const getTrending = async () => {
    try {
      const { data } = await axios.get(`/trending/${category}/${duration}`);
      settrending((prevState) => [...prevState, ...data.results]);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getTrending();
  }, [category, duration]);
  return trending.length > 0 ? (
    <div className="h-screen w-screen px-5 overflow-x-hidden ">
      <div className="h-[10%]  px-5   flex items-center ">
        <div className=" w-full flex  gap-2 items-center ">
          <i
            onClick={() => navigate(-1)}
            className="ri-arrow-left-line cursor-pointer text-2xl text-zinc-400 hover:text-[#6556CD]"
          ></i>
          <h1 className="uppercase font-bold text-2xl text-zinc-200">
            Heading
          </h1>
          <div className="w-full">
            <Topnav />
          </div>
        </div>

        <div className=" flex items-center gap-4">
          <Dropdown
            title={"Category"}
            option={["tv", "movie", "all"]}
            func={(e) => setcategory(e.target.value)}
          />
          <Dropdown
            title={"Duration"}
            option={["week", "day"]}
            func={(e) => setduration(e.target.value)}
          />
        </div>
      </div>
      <div className="card h-[90%]">
        <InfiniteScroll
          dataLength={trending.length}
          hasMore={true}
          next={getTrending()}
          loader={<h1>Loading...</h1>}
        >
          <Cards data={trending} />
        </InfiniteScroll>
      </div>
    </div>
  ) : (
    <Loader />
  );
};

export default Trending;

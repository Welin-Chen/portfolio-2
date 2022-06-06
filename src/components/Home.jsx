import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";

const Home = () => {
  return (
    <div name="home" className="w-full h-screen bg-[#0a192f]">
      {/* Container */}

      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full text-white">
        <p className=" text-pink-600">嗨！ 我的名字是</p>
        <h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6]">
          陳維霖
        </h1>
        <h2 className="text-4xl sm:text-7xl font-bold text-[#8892b0]">
          我是一個全端工程師
        </h2>
        <p className="text-[#8892b0] py-4 max-w-[700px]">
          我是一個全端工程師，目前我專注在響應式全端網頁應用程式app
        </p>

        <div>
          <button className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600">
            View Work
            <span className="group-hover:rotate-90 duration-300">
              <HiArrowNarrowRight className="ml-3" />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;

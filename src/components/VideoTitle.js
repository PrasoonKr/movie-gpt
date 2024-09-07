import React from "react";
import { FaPlay } from "react-icons/fa";
import { BsInfoCircle } from "react-icons/bs";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video pt-[13%] px-20 absolute text-white bg-gradient-to-r from-black">
      <h1 className="text-6xl font-bold w-1/2">{title}</h1>
      <p className="text-lg py-6 w-1/3">{overview}</p>
      <div className="flex">
        <button className="bg-white text-black mr-3 py-2 px-9 text-xl font-bold flex rounded-lg hover:opacity-80 ">
          <FaPlay className=" text-2xl mr-2 pt-1" />
          Play
        </button>
        <button className=" flex text-white py-2 px-6 text-xl  font-bold rounded-lg bg-slate-800 hover:opacity-80 ">
          <BsInfoCircle className=" text-2xl pr-1 mr-2 pt-1" />
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;

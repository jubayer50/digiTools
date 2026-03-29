import React from "react";
import CircleImg from "../../assets/circle.png";
import BannerImg from "../../assets/banner.png";
import { IoPlayOutline } from "react-icons/io5";

const Banner = () => {
  return (
    <div>
      <div className="max-w-300 mx-auto px-1.5 mt-20 flex flex-col-reverse md:flex-row md:items-center gap-16">
        <div className="max-w-158.5">
          <p className="bg-[#E1E7FF] py-2 px-4 rounded-full w-fit font-medium flex items-center gap-2">
            <img src={CircleImg} alt="" />
            <span className="bg-linear-to-r from-[#4F39F6] to-[#9514FA] w-fit bg-clip-text text-transparent">
              New: AI-Powered Tools Available
            </span>
          </p>

          <h2 className="text-[38px] md:text-7xl font-extrabold leading-13 md:leading-23 mt-4">
            Supercharge Your Digital Workflow
          </h2>

          <p className="mt-4 leading-7 text-lg text-[#627382]">
            Access premium AI tools, design assets, templates, and productivity
            software—all in one place. Start creating faster today. Explore
            Products
          </p>

          <div className="mt-8 flex flex-col md:flex-row md:items-center gap-4 font-bold">
            <button className="text-white btn rounded-full px-4 py-3 bg-linear-to-r from-[#4F39F6] to-[#9514FA]">
              Explore Products
            </button>
            <button className="btn rounded-full px-4 py-3 border border-[#9514FA] flex items-center gap-3">
              <IoPlayOutline className="text-[#9514FA]"></IoPlayOutline>
              <span className="bg-linear-to-r from-[#4F39F6] to-[#9514FA] w-fit bg-clip-text text-transparent">
                Watch Demo
              </span>
            </button>
          </div>
        </div>

        <div>
          <img className="max-w-full" src={BannerImg} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Banner;

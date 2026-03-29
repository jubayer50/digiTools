import React from "react";

const Stats = () => {
  return (
    <div className="bg-linear-to-r from-[#4F39F6] to-[#9514FA] mt-20">
      <div className="max-w-300 mx-auto flex flex-col md:flex-row gap-12 justify-between md:divide-x py-15 text-white">
        <div className="text-center px-26">
          <h2 className="text-6xl font-extrabold">50K+</h2>
          <p className="text-2xl font-medium mt-3">Active Users</p>
        </div>

        <div className="text-center px-26">
          <h2 className="text-6xl font-extrabold">200+</h2>
          <p className="text-2xl font-medium mt-3">Premium Tools</p>
        </div>

        <div className=" text-center px-26">
          <h2 className="text-6xl font-extrabold">4.9</h2>
          <p className="text-2xl font-medium mt-3">Rating</p>
        </div>
      </div>
    </div>
  );
};

export default Stats;

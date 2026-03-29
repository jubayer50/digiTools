import React from "react";
import { GrCart } from "react-icons/gr";

const NavBar = () => {
  return (
    <div>
      <div className="max-w-300 mx-auto flex justify-between items-center py-4 px-1">
        <div>
          <h2 className="text-2xl md:text-4xl font-extrabold bg-linear-to-r from-[#4F39F6] to-[#9514FA] w-fit bg-clip-text text-transparent p-1">
            DigiTools
          </h2>
        </div>

        <div className="hidden md:block">
          <ul className="flex gap-8 font-semibold text-[#101727]">
            <li>
              <a href="">Products</a>
            </li>
            <li>
              <a href="">Features</a>
            </li>
            <li>
              <a href="">Pricing</a>
            </li>
            <li>
              <a href="">Testimonials</a>
            </li>
            <li>
              <a href="">FAQ</a>
            </li>
          </ul>
        </div>

        <div className="flex items-center gap-4">
          <GrCart className="cursor-pointer"></GrCart>
          <p className="font-medium md:font-semibold text-[#101727]">Login</p>
          <button className="btn rounded-full py-2 px-3 md:py-3 md:px-4 bg-linear-to-r from-[#4F39F6] to-[#9514FA] font-medium md:font-semibold text-white">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default NavBar;

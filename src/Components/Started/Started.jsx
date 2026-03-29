import React from "react";
import User from "../../assets/user.png";
import Rocket from "../../assets/rocket.png";
import Package from "../../assets/package.png";

const Started = () => {
  return (
    <div className="mt-20 md:mt-30 bg-[#F9FAFC]">
      <div className="max-w-300 mx-auto py-20 md:py-30">
        <div className="text-center">
          <h2 className="text-3xl md:text-5xl font-extrabold text-[#101727]">
            Get Started in 3 Steps
          </h2>
          <p className="mt-4 text-[#627382]">
            Start using premium digital tools in minutes, not hours.
          </p>
        </div>

        <div className="mt-10 flex flex-col md:flex-row justify-center items-center gap-7">
          <div className="max-w-95 px-6 py-20 shadow rounded-lg">
            <div className="h-25 w-25 rounded-full bg-[#9514FA20] flex justify-center items-center mx-auto mb-4">
              <img src={User} alt="" />
            </div>

            <div className="text-center space-y-4">
              <h2 className="text-2xl font-bold">Create Account</h2>
              <p className="text-[#627382]">
                Sign up for free in seconds. No credit card required to get
                started.
              </p>
            </div>
          </div>

          <div className="max-w-95 px-6 py-20 shadow rounded-lg">
            <div className="h-25 w-25 rounded-full bg-[#9514FA20] flex justify-center items-center mx-auto mb-4">
              <img src={Package} alt="" />
            </div>

            <div className="text-center space-y-4">
              <h2 className="text-2xl font-bold">Choose Products</h2>
              <p className="text-[#627382]">
                Browse our catalog and select the tools that fit your needs.
              </p>
            </div>
          </div>

          <div className="max-w-95 px-6 py-20 shadow rounded-lg">
            <div className="h-25 w-25 rounded-full bg-[#9514FA20] flex justify-center items-center mx-auto mb-4">
              <img src={Rocket} alt="" />
            </div>

            <div className="text-center space-y-4">
              <h2 className="text-2xl font-bold">Start Creating</h2>
              <p className="text-[#627382]">
                Download and start using your premium tools immediately.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Started;

import React from "react";

const Transform = () => {
  return (
    <div className="mt-20 md:mt-30 px-2 bg-linear-to-r from-[#4F39F6] to-[#9514FA]">
      <div className="max-w-300 mx-auto">
        <div className="py-20 md:py-30 text-center">
          <h2 className="font-extrabold text-3xl md:text-[40px] text-white">
            Ready to Transform Your Workflow?
          </h2>
          <p className="text-[#ffffff90] mt-4 max-w-155  mx-auto">
            Join thousands of professionals who are already using Digitools to
            work smarter.Start your free trial today.
          </p>

          <div className="mt-10">
            <div className="flex mx-auto flex-col gap-3 md:flex-row md:justify-center">
              <button className="btn bg-white rounded-full">
                <span className="bg-linear-to-r from-[#4F39F6] to-[#9514FA] w-fit bg-clip-text text-transparent">
                  Explore Products
                </span>
              </button>
              <button className="btn bg-transparent border border-[#ffffff] rounded-full text-white">
                View Pricing
              </button>
            </div>

            <p className="text-[#ffffff90] mt-4">
              14-day free trial • No credit card required • Cancel anytime
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Transform;

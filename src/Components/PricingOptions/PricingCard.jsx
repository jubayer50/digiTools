import React from "react";
import PricingFeatures from "./PricingFeatures";

const PricingCard = ({ pricingPlan }) => {
  console.log(pricingPlan);
  return (
    <div className="p-6 rounded-2xl flex flex-col bg-[#F9FAFC] border-2 border-[#F2F2F2] relative">
      <div>
        <h3 className="text-2xl text-[#101727] font-bold">
          {pricingPlan.name}
        </h3>
        <p className="text-[#627382] mt-2">{pricingPlan.best_for}</p>
      </div>

      {pricingPlan.highlighted && (
        <div className="bg-[#FEF3C6] py-1 px-3 rounded-full absolute right-[50%]  translate-x-[50%] -top-3">
          <p className="text-[14px] text-[#BB4D00] font-medium">Most Popular</p>
        </div>
      )}

      <div className="my-6">
        <h2 className="text-[#627382] text-[20px]">
          <span className="text-[40px] font-bold text-[#101727]">
            ${pricingPlan.price}
          </span>
          /Month
        </h2>
      </div>

      <div className="flex-1">
        {pricingPlan.features.map((feature, i) => (
          <PricingFeatures key={i} feature={feature}></PricingFeatures>
        ))}
      </div>

      <div className="mt-6">
        <button className="btn w-full rounded-full">
          {pricingPlan.button}
        </button>
      </div>
    </div>
  );
};

export default PricingCard;

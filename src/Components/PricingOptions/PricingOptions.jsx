import React, { use } from "react";
import PricingCard from "./PricingCard";

const PricingOptions = ({ pricingPromise }) => {
  const getPricingData = use(pricingPromise);
  const pricingPlans = getPricingData.pricing_plans;

  return (
    <div className="my-20 md:my-30 max-w-300 mx-auto px-2">
      <div className="text-center">
        <h2 className="text-3xl md:text-5xl font-extrabold text-[#101727]">
          Simple, Transparent Pricing
        </h2>
        <p className="mt-4 text-[#627382]">
          Choose the plan that fits your needs. Upgrade or downgrade anytime.
        </p>
      </div>

      <div className="flex flex-col md:flex-row justify-center gap-8 mt-10">
        {pricingPlans.map((pricingPlan) => (
          <PricingCard
            key={pricingPlan.id}
            pricingPlan={pricingPlan}
          ></PricingCard>
        ))}
      </div>
    </div>
  );
};

export default PricingOptions;

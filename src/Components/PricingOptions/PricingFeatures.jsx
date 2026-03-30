import React from "react";
import { FaCheck } from "react-icons/fa6";

const PricingFeatures = ({ feature }) => {
  return (
    <div className="">
      <div className="">
        <p className="flex items-center gap-2 mt-2">
          <FaCheck className="text-[#30B868]"></FaCheck> {feature}
        </p>
      </div>
    </div>
  );
};

export default PricingFeatures;
<div>Features</div>;

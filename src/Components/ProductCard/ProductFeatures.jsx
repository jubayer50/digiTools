import React from "react";
import { FaCheck } from "react-icons/fa6";

const ProductFeatures = ({ feature }) => {
  return (
    <p className="flex gap-2 items-center">
      <FaCheck className="font-bold text-[#30B868]"></FaCheck> {feature}
    </p>
  );
};

export default ProductFeatures;

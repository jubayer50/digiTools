import React from "react";
import ProductFeatures from "./ProductFeatures";

const ProductCard = ({ product }) => {
  const { name, icon, description, period, price, tag, features } = product;
  return (
    <div className="">
      <div className="space-y-4 text-[#627382] p-6 rounded-2xl border-2 border-[#F2F2F2] relative">
        <div className="h-15 w-15 rounded-full flex justify-center items-center bg-white border border-[#F2F2F2]">
          <img src={icon} alt="" />
        </div>

        <div
          className={`${tag == "new" ? "bg-[#DBFCE7] text-[#0A883E]" : tag == "best seller" ? "bg-[#FEF3C6] text-[#BB4D00]" : tag == "popular" ? "bg-[#E1E7FF] text-[#9514FA]" : ""} px-3 py-1.5 rounded-full w-fit absolute top-3 right-3`}
        >
          <p>{tag}</p>
        </div>

        <div>
          <h2 className="text-[#101727] font-bold text-2xl">{name}</h2>
          <p className="mt-4">{description}</p>
        </div>

        <div>
          <h3>
            <span className="text-2xl font-bold text-[#101727]">${price}</span>/
            {period}
          </h3>
        </div>

        {/* features */}
        <div className="space-y-2">
          {features.map((feature, i) => (
            <ProductFeatures key={i} feature={feature}></ProductFeatures>
          ))}
        </div>

        <div>
          <button className="btn bg-linear-to-r w-full from-[#4F39F6] to-[#9514FA] text-white rounded-full">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
<div>products name: </div>;

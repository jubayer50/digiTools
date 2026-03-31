import React from "react";

const CartEmpty = () => {
  return (
    <div className="max-w-300 mx-auto">
      <div className="py-10 text-center space-y-1">
        <h2 className="text-2xl font-semibold text-[#101727]">
          Cart is Empty!
        </h2>
        <p className="text-[#627382]">Add some Product.</p>
      </div>
    </div>
  );
};

export default CartEmpty;

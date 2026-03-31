import React from "react";
import { toast } from "react-toastify";

const CartProduct = ({ cart, carts, setCarts }) => {
  const handleRemove = (cart) => {
    const newCart = carts.filter((item) => item.id !== cart.id);

    setCarts(newCart);

    toast.success("Item remove from the cart!");
  };

  return (
    <div>
      <div className=" bg-[#F9FAFC] rounded-2xl p-6">
        <div className="flex justify-between items-end sm:items-center">
          <div className="flex gap-3 items-center">
            <div className="h-15 w-15 rounded-full border border-[#F2F2F2] flex justify-center items-center bg-white">
              <img className="w-8 h-8" src={cart.icon} alt="" />
            </div>

            <div>
              <h3 className="font-semibold text-xl text-[#101727]">
                {cart.name}
              </h3>
              <p className="font-medium text-[#627382]">${cart.price}</p>
            </div>
          </div>

          <div>
            <h3
              onClick={() => {
                handleRemove(cart);
              }}
              className="text-[#FF3980] font-bold cursor-pointer"
            >
              Remove
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartProduct;

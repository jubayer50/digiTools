import React from "react";
import CartProduct from "../CartProduct/CartProduct";
import EmptyCart from "./EmptyCart";
import { toast } from "react-toastify";

const CartProducts = ({ carts, setCarts }) => {
  // console.log(carts);

  const totalPrice = carts.reduce((sum, item) => sum + item.price, 0);

  const handleCheckOut = () => {
    setCarts([]);
    toast.success("Payment Successful!");
  };

  return (
    <div className="max-w-300 mx-auto mt-10 border-2 border-[#F2F2F2] rounded-2xl px-2 p-5 md:p-10">
      <div className="">
        <h2 className="text-2xl text-[#101727] font-bold">Your Cart</h2>
      </div>

      <div className="mt-6 space-y-4">
        {carts.map((cart) => (
          <CartProduct
            key={cart.id}
            cart={cart}
            carts={carts}
            setCarts={setCarts}
          ></CartProduct>
        ))}
      </div>

      {carts.length > 0 && (
        <div>
          <div className="flex justify-between mt-6 px-4">
            <h3>Total:</h3>
            <p>${totalPrice}</p>
          </div>

          <button
            onClick={handleCheckOut}
            className="btn w-full bg-linear-to-r from-[#4F39F6] to-[#9514FA] rounded-full text-white text-xl font-bold py-6 mt-6"
          >
            Proceed to Checkout
          </button>
        </div>
      )}

      {carts.length === 0 && <EmptyCart></EmptyCart>}
    </div>
  );
};

export default CartProducts;

/**
 *{
    "id": 1,
    "name": "AI Writing Pro",
    "description": "Advanced AI-powered writing assistant for blogs, emails, and marketing content.",
    "price": 19,
    "period": "monthly",
    "tag": "popular",
    "tagType": "popular",
    "features": [
        "Unlimited content generation",
        "Grammar & tone correction",
        "SEO optimization",
        "Multi-language support"
    ],
    "icon": "https://i.ibb.co.com/1GN2FZfH/AI-Writing.png"
}
 */

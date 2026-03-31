import React from "react";

const Tabs = ({ tabsActive, setTabsActive, carts }) => {
  return (
    <div className="max-w-300 mx-auto px-2 font-bold">
      {/* name of each tab group should be unique */}
      <div className="tabs justify-center gap-10 mt-4 bg-transparent tabs-box">
        <input
          type="radio"
          name="my_tabs_1"
          className={`tab w-30 rounded-full ${tabsActive === "products" ? "bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white" : ""}`}
          aria-label="Products"
          onClick={() => {
            setTabsActive("products");
          }}
          defaultChecked
        />
        <input
          type="radio"
          name="my_tabs_1"
          className={`tab w-30 rounded-full ${tabsActive === "cart" ? "bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white" : ""}`}
          aria-label={`Cart (${carts.length})`}
          onClick={() => {
            setTabsActive("cart");
          }}
        />
      </div>
    </div>
  );
};

export default Tabs;

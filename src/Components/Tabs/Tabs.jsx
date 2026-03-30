import React from "react";

const Tabs = ({ setTabsActive }) => {
  return (
    <div className="max-w-300 mx-auto px-2 font-bold">
      {/* name of each tab group should be unique */}
      <div className="tabs justify-center gap-10 mt-4 bg-transparent tabs-box">
        <input
          type="radio"
          name="my_tabs_1"
          className="tab w-30 rounded-full"
          aria-label="Products"
          onClick={() => {
            setTabsActive("products");
          }}
          defaultChecked
        />
        <input
          type="radio"
          name="my_tabs_1"
          className="tab w-30 rounded-full"
          aria-label="Cart"
          onClick={() => {
            setTabsActive("cart");
          }}
        />
      </div>
    </div>
  );
};

export default Tabs;

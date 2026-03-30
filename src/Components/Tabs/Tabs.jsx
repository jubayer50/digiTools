import React from "react";

const Tabs = () => {
  return (
    <div className="max-w-300 mx-auto px-2">
      {/* name of each tab group should be unique */}
      <div className="tabs justify-center gap-10 mt-4 bg-transparent tabs-box">
        <input
          type="radio"
          name="my_tabs_1"
          className="tab w-30"
          aria-label="Products"
          defaultChecked
        />
        <input
          type="radio"
          name="my_tabs_1"
          className="tab w-30"
          aria-label="Cart"
        />
      </div>
    </div>
  );
};

export default Tabs;

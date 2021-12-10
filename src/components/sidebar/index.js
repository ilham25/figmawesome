import React from "react";

function Sidebar({ header = "header", children }) {
  return (
    <div className="bg-white overflow-auto overflow-x-hidden mb-12 scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-transparent overflow-y-scroll scrollbar-thumb-rounded-full scrollbar-track-rounded-full">
      <div className="w-full border-b border-gray-200 px-4 py-3 ">
        <p className="text-xxs font-semibold">{header}</p>
      </div>
      {children}
    </div>
  );
}

export default Sidebar;

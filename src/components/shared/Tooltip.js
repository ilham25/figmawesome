import React from "react";

function Tooltip({ title }) {
  return (
    <div className="bg-black  py-1 px-2 absolute -bottom-8 left-1/2  w-auto rounded-sm transform -translate-x-1/2 hidden group-hover:block pointer-events-none">
      <div className="relative">
        <div className="h-3 w-3 bg-black absolute -top-1.5 z-0 left-1/2  transform rotate-45 -translate-x-1/2"></div>
      </div>
      <p className="relative z-10 text-xxs text-white text-center whitespace-nowrap">
        {title}
      </p>
    </div>
  );
}

export default Tooltip;

import React from "react";

function FillComponent() {
  return (
    <div className="grid grid-cols-8">
      <div className="col-span-6 h-7 flex border border-transparent rounded-sm hover:border-gray-200 group relative mr-3">
        <div className="w-full p-1 group-hover:border-r group-hover:border-gray-200 flex items-center">
          <div className="w-5 h-4 bg-black mr-2 rounded-sm"></div>
          <input
            className="text-xxs w-full h-full outline-none"
            defaultValue="#000000"
          />
        </div>
        <div className="h-full w-16 p-1 flex items-center">
          <input
            className="text-xxs w-full h-full outline-none"
            defaultValue={98}
            type="number"
          />
        </div>
      </div>
    </div>
  );
}

export default FillComponent;

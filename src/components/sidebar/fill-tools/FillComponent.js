import React, { useEffect, useState } from "react";
import { isValidColor } from "utils";

function FillComponent({ selectedComponentProps, setProperties }) {
  const { get: selectedComponent } = selectedComponentProps || {};

  let fill = selectedComponent?.properties?.fill || "#c4c4c4";
  let opacity = selectedComponent?.properties?.opacity || 1;

  return (
    <div className="grid grid-cols-8">
      <div className="col-span-6 h-7 flex border border-transparent rounded-sm hover:border-gray-200 group relative mr-3">
        <div className="w-full p-1 group-hover:border-r group-hover:border-gray-200 flex items-center">
          <div
            className="w-5 h-4 mr-2 rounded-sm"
            style={{
              backgroundColor: fill[0] === "#" ? fill : `#${fill}`,
              opacity: opacity,
            }}
          ></div>
          <input
            className="text-xxs w-full h-full outline-none cursor-default uppercase"
            defaultValue={fill}
            onKeyPress={(e) => {
              if (e.key === "Enter") {
                let finalFill = isValidColor(e.target.value)
                  ? e.target.value
                  : fill;

                setProperties("fill", finalFill);
              }
            }}
            onBlur={(e) => {
              let finalFill = isValidColor(e.target.value)
                ? e.target.value
                : fill;

              setProperties("fill", finalFill);
            }}
          />
        </div>
        <div className="h-full w-16 p-1 flex items-center">
          <input
            className="text-xxs w-full h-full outline-none cursor-default"
            defaultValue={opacity * 100}
            type="number"
            min={0}
            max={100}
            onKeyPress={(e) => {
              if (e.key === "Enter") {
                setProperties("opacity", e.target.value / 100);
              }
            }}
            onBlur={(e) => {
              setProperties("opacity", e.target.value / 100);
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default FillComponent;

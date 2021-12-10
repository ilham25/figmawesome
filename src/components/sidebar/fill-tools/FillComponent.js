import React, { useState } from "react";
import { isValidColor } from "utils";

function FillComponent() {
  const [color, setColor] = useState("#000000");
  const [opacity, setOpacity] = useState(1);
  return (
    <div className="grid grid-cols-8">
      <div className="col-span-6 h-7 flex border border-transparent rounded-sm hover:border-gray-200 group relative mr-3">
        <div className="w-full p-1 group-hover:border-r group-hover:border-gray-200 flex items-center">
          <div
            className="w-5 h-4 mr-2 rounded-sm"
            style={{
              backgroundColor: color[0] === "#" ? color : `#${color}`,
              opacity: opacity,
            }}
          ></div>
          <input
            className="text-xxs w-full h-full outline-none cursor-default"
            defaultValue={color}
            onKeyPress={(e) => {
              if (e.key === "Enter") {
                setColor((prev) =>
                  isValidColor(e.target.value) ? e.target.value : prev
                );
              }
            }}
            onBlur={(e) => {
              setColor((prev) =>
                isValidColor(e.target.value) ? e.target.value : prev
              );
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
                setOpacity(e.target.value / 100);
              }
            }}
            onBlur={(e) => {
              setOpacity(e.target.value / 100);
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default FillComponent;

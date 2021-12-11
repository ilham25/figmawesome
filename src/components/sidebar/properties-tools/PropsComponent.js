import Tooltip from "components/shared/Tooltip";
import React, { useState } from "react";
import { AiOutlineReload } from "react-icons/ai";

function PropsComponent({
  type,
  className,
  text = "X",
  useIcon,
  icon = AiOutlineReload,
  title,
  valueProps,
}) {
  let Icon = icon;
  const { get: value, set: setValue } = valueProps;
  return (
    <div
      className={`flex border border-transparent rounded-sm hover:border-gray-200 group relative ${className} `}
    >
      <div className="w-10 h-7 flex justify-center items-center pointer-events-none text-gray-400">
        {!useIcon ? (
          <p className="text-xs">{text}</p>
        ) : (
          <div>
            <Icon size={12} />
          </div>
        )}
      </div>
      <input
        className="w-full h-7 outline-none text-xxs cursor-default"
        defaultValue={value[type] || 0}
        type="number"
        onKeyPress={(e) => {
          if (e.key === "Enter") {
            setValue(type, +e.target.value);
          }
        }}
        onBlur={(e) => {
          setValue(type, +e.target.value);
        }}
        // value={value[type] || 0}
      />
      {title && <Tooltip title={title} />}
    </div>
  );
}

export default PropsComponent;

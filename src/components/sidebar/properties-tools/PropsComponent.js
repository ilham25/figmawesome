import Tooltip from "components/shared/Tooltip";
import React from "react";
import { AiOutlineReload } from "react-icons/ai";

function PropsComponent({
  className,
  text = "X",
  useIcon,
  icon = AiOutlineReload,
  title,
}) {
  let Icon = icon;
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
        defaultValue={0}
        type="number"
      />
      {title && <Tooltip title={title} />}
    </div>
  );
}

export default PropsComponent;

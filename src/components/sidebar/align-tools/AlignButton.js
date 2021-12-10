import Tooltip from "components/shared/Tooltip";
import React from "react";
import { AiOutlineVerticalRight } from "react-icons/ai";

function AlignButton({
  className = "",
  icon = AiOutlineVerticalRight,
  title = "",
}) {
  let Icon = icon;
  return (
    <button className="cursor-default rounded-sm w-7 h-7 place-self-center hover:bg-gray-200 flex justify-center items-center active:bg-transparent group relative">
      <Icon className={className} size={18} />
      <Tooltip title={title} />
    </button>
  );
}

export default AlignButton;

import Tooltip from "components/shared/Tooltip";
import React from "react";
import { AiOutlineDeploymentUnit } from "react-icons/ai";

function ToolButton({
  title = "Ini adalah tools",
  icon = AiOutlineDeploymentUnit,
}) {
  const Icon = icon;
  return (
    <div className="relative group">
      <button className="h-full flex items-center outline-none justify-center px-3 hover:bg-black focus:bg-cyan-500">
        <Icon className="text-white" size={24} />
      </button>
      <Tooltip title={title} />
    </div>
  );
}

export default ToolButton;

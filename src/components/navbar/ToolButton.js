import React from "react";
import { AiOutlineDeploymentUnit } from "react-icons/ai";

import Popup from "components/shared/Popup";
import Tooltip from "components/shared/Tooltip";
import { toolList } from "utils";

function ToolButton({
  type,
  title = "Ini adalah tools",
  icon = AiOutlineDeploymentUnit,
  selectedToolProps,
}) {
  const Icon = icon;

  const { get: tool, set: setTool } = selectedToolProps;
  return (
    <div
      className="relative group"
      onClick={() => {
        setTool(type);
      }}
      onBlur={() => {
        setTool(null);
      }}
    >
      <button className="h-full flex items-center outline-none justify-center px-3 hover:bg-black focus:bg-cyan-500">
        <Icon className="text-white" size={24} />
      </button>
      {type !== tool && <Tooltip title={title} />}
      {type === tool && <Popup data={toolList[type]} />}
    </div>
  );
}

export default ToolButton;

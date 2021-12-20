import { useEffect, useState } from "react";
import {
  AiFillUsb,
  AiOutlineAppstore,
  AiOutlineDeploymentUnit,
  AiOutlineFundProjectionScreen,
  AiOutlineInsertRowAbove,
  AiOutlineLayout,
  AiOutlineZoomIn,
} from "react-icons/ai";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { changeNavTool, changeSelectedTool } from "reducer/selectedToolSlice";
import ToolButton from "./ToolButton";

function NavBar() {
  const selectedTool = useSelector((state) => state?.selectedTool);
  const dispatch = useDispatch();

  const setSelectedTool = (value) => {
    dispatch(changeNavTool(value));
  };

  const zoom = useSelector((state) => state.zoom);

  return (
    <header className="h-12 bg-gray-800 grid grid-cols-3 pr-5">
      <div className="flex h-full">
        <ToolButton
          type="badge"
          title="Badge"
          icon={AiFillUsb}
          selectedToolProps={{ get: selectedTool, set: setSelectedTool }}
        />
        <ToolButton
          type="components"
          title="Components"
          icon={AiOutlineDeploymentUnit}
          selectedToolProps={{ get: selectedTool, set: setSelectedTool }}
        />
        <ToolButton
          type="containers"
          title="Containers"
          icon={AiOutlineAppstore}
          selectedToolProps={{ get: selectedTool, set: setSelectedTool }}
        />
        <ToolButton
          type="layouts"
          title="Layouts"
          icon={AiOutlineLayout}
          selectedToolProps={{ get: selectedTool, set: setSelectedTool }}
        />
        <ToolButton
          type="popbars"
          title="Popups and bars"
          icon={AiOutlineInsertRowAbove}
          selectedToolProps={{ get: selectedTool, set: setSelectedTool }}
        />
        <ToolButton
          type="frames"
          title="Frames"
          icon={AiOutlineFundProjectionScreen}
          selectedToolProps={{ get: selectedTool, set: setSelectedTool }}
        />
      </div>
      <div className="flex items-center justify-center">
        <p className="font-normal text-sm text-gray-400">FigmAwesome</p>
      </div>
      <div className="flex items-center justify-end">
        <div className="flex items-center gap-1">
          <AiOutlineZoomIn size={12} className="text-white" />
          <p className="text-xxs text-white">
            {((zoom.value || 0) * 100).toFixed(0)}%
          </p>
        </div>
      </div>
    </header>
  );
}

export default NavBar;

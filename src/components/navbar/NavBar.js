import { useState } from "react";
import {
  AiOutlineAppstore,
  AiOutlineDeploymentUnit,
  AiOutlineInsertRowAbove,
  AiOutlineLayout,
  AiOutlineZoomIn,
} from "react-icons/ai";
import { useSelector } from "react-redux";
import ToolButton from "./ToolButton";

function NavBar() {
  const [selectedTool, setSelectedTool] = useState(null);
  const zoom = useSelector((state) => state.zoom);

  return (
    <header className="h-12 bg-gray-800 grid grid-cols-3 px-5">
      <div className="flex items-center">
        {/* <p className="font-normal text-cyan-500">AwesomeWM Generator</p> */}
      </div>
      <div className="flex h-full justify-center">
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

import { useState } from "react";
import {
  AiOutlineAppstore,
  AiOutlineDeploymentUnit,
  AiOutlineInsertRowAbove,
  AiOutlineLayout,
} from "react-icons/ai";
import ToolButton from "./ToolButton";

function NavBar() {
  const [selectedTool, setSelectedTool] = useState(null);

  return (
    <header className="h-12 bg-gray-800 grid grid-cols-3 ">
      <div className="flex items-center pl-5">
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
      <div className=""></div>
    </header>
  );
}

export default NavBar;

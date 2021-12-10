import React from "react";
import {
  AiOutlineAppstore,
  AiOutlineDeploymentUnit,
  AiOutlineInsertRowAbove,
  AiOutlineLayout,
} from "react-icons/ai";
import ToolButton from "./ToolButton";

function NavBar() {
  return (
    <header className="h-12 bg-gray-800 grid grid-cols-3 ">
      <div className="flex items-center pl-5">
        {/* <p className="font-normal text-cyan-500">AwesomeWM Generator</p> */}
      </div>
      <div className="flex h-full justify-center">
        <ToolButton title="Components" icon={AiOutlineDeploymentUnit} />
        <ToolButton title="Containers" icon={AiOutlineAppstore} />
        <ToolButton title="Layouts" icon={AiOutlineLayout} />
        <ToolButton title="Popups and bars" icon={AiOutlineInsertRowAbove} />
      </div>
      <div className=""></div>
    </header>
  );
}

export default NavBar;

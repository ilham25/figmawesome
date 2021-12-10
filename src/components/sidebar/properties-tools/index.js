import React from "react";
import { AiOutlineRadiusSetting, AiOutlineReload } from "react-icons/ai";
import PropsComponent from "./PropsComponent";

function PropsTools() {
  return (
    <div className="w-full grid grid-cols-2 p-3 border-y border-gray-200 gap-1">
      <PropsComponent text="X" />
      <PropsComponent text="Y" />
      <PropsComponent text="W" />
      <PropsComponent text="H" />
      <PropsComponent useIcon icon={AiOutlineReload} title="Rotation" />
      <PropsComponent
        useIcon
        icon={AiOutlineRadiusSetting}
        title="Corner radius"
      />
    </div>
  );
}

export default PropsTools;

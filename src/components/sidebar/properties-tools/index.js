import React from "react";
import { AiOutlineRadiusSetting, AiOutlineReload } from "react-icons/ai";
import PropsComponent from "./PropsComponent";

function PropsTools({ selectedComponentProps, setProperties }) {
  const { get: selectedComponent } = selectedComponentProps;

  return (
    <div className="w-full grid grid-cols-2 py-4 px-2 border-y border-gray-200 gap-1">
      <PropsComponent
        type="x"
        text="X"
        valueProps={{
          get: selectedComponent?.properties,
          set: setProperties,
        }}
      />
      <PropsComponent
        type="y"
        text="Y"
        valueProps={{
          get: selectedComponent?.properties,
          set: setProperties,
        }}
      />
      <PropsComponent
        type="width"
        text="W"
        valueProps={{
          get: selectedComponent?.properties,
          set: setProperties,
        }}
      />
      <PropsComponent
        type="height"
        text="H"
        valueProps={{
          get: selectedComponent?.properties,
          set: setProperties,
        }}
      />
      <PropsComponent
        type="rotation"
        useIcon
        icon={AiOutlineReload}
        title="Rotation"
        valueProps={{
          get: selectedComponent?.properties,
          set: setProperties,
        }}
      />
      <PropsComponent
        type="cornerRadius"
        useIcon
        icon={AiOutlineRadiusSetting}
        title="Corner radius"
        valueProps={{
          get: selectedComponent?.properties,
          set: setProperties,
        }}
      />
    </div>
  );
}

export default PropsTools;

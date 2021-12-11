import React, { useEffect, useState } from "react";
import { AiOutlineRadiusSetting, AiOutlineReload } from "react-icons/ai";
import { useSelector, useDispatch } from "react-redux";
import { changeProperties } from "reducer/componentListSlice";
import PropsComponent from "./PropsComponent";

function PropsTools() {
  const componentList = useSelector((state) => state.componentList);
  const dispatch = useDispatch();

  const [selectedComponent, setSelectedComponent] = useState(null);

  useEffect(() => {
    if (!componentList?.selectedId) {
      setSelectedComponent(null);
    } else {
      const findSelected = componentList?.value?.find(
        (comp) => comp.id === componentList?.selectedId
      );
      setSelectedComponent(findSelected);
    }
  }, [componentList.selectedId]);

  const setValue = (key, value) => {
    const payload = {
      ...selectedComponent,
      properties: {
        ...selectedComponent.properties,
        [key]: value,
      },
    };

    dispatch(changeProperties(payload));
  };

  return (
    <div className="w-full grid grid-cols-2 py-4 px-2 border-y border-gray-200 gap-1">
      {selectedComponent && (
        <>
          <PropsComponent
            type="x"
            text="X"
            valueProps={{ get: selectedComponent?.properties, set: setValue }}
          />
          <PropsComponent
            type="y"
            text="Y"
            valueProps={{ get: selectedComponent?.properties, set: setValue }}
          />
          <PropsComponent
            type="width"
            text="W"
            valueProps={{ get: selectedComponent?.properties, set: setValue }}
          />
          <PropsComponent
            type="height"
            text="H"
            valueProps={{ get: selectedComponent?.properties, set: setValue }}
          />
          <PropsComponent
            type="rotation"
            useIcon
            icon={AiOutlineReload}
            title="Rotation"
            valueProps={{ get: selectedComponent?.properties, set: setValue }}
          />
          <PropsComponent
            type="cornerRadius"
            useIcon
            icon={AiOutlineRadiusSetting}
            title="Corner radius"
            valueProps={{ get: selectedComponent?.properties, set: setValue }}
          />
        </>
      )}
    </div>
  );
}

export default PropsTools;

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeProperties } from "reducer/componentListSlice";
import Sidebar from ".";
import AlignTools from "./align-tools";
import FillTools from "./fill-tools";
import GeneratedCode from "./generated-code";
import PropsTools from "./properties-tools";

function PropertiesSidebar() {
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

  const setProperties = (key, value) => {
    const payload = {
      ...selectedComponent,
      properties: {
        ...selectedComponent.properties,
        [key]: value,
      },
    };
    setSelectedComponent(payload);

    dispatch(changeProperties(payload));
  };

  return (
    <Sidebar header="Properties">
      <AlignTools />
      {selectedComponent && (
        <>
          <PropsTools
            selectedComponentProps={{
              get: selectedComponent,
              set: setSelectedComponent,
            }}
            setProperties={setProperties}
          />
          <FillTools
            header="Fill"
            selectedComponentProps={{
              get: selectedComponent,
              set: setSelectedComponent,
            }}
            setProperties={setProperties}
          />
          <GeneratedCode />
        </>
      )}
    </Sidebar>
  );
}

export default PropertiesSidebar;

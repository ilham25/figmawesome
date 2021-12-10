import React from "react";
import Sidebar from ".";
import AlignTools from "./align-tools";
import FillTools from "./fill-tools";
import PropsTools from "./properties-tools";

function PropertiesSidebar() {
  return (
    <Sidebar header="Properties">
      <AlignTools />
      <PropsTools />
      <FillTools header="Fill" />
    </Sidebar>
  );
}

export default PropertiesSidebar;

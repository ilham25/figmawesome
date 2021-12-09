import Expandable from "components/shared/Expandable";
import React from "react";
import Sidebar from ".";

function ComponentSidebar() {
  return (
    <Sidebar>
      <Expandable title="Frame 1">
        <Expandable title="Object 2" isChildren>
          <Expandable title="Rect 3" isChildren></Expandable>
        </Expandable>
      </Expandable>
    </Sidebar>
  );
}

export default ComponentSidebar;

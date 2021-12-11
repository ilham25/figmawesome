import React from "react";
import { useSelector } from "react-redux";

import Expandable from "components/shared/Expandable";
import { widgetData } from "utils";
import Sidebar from ".";

function ComponentSidebar() {
  const componentList = useSelector((state) => state.componentList);

  return (
    <Sidebar header="Widget List">
      {componentList?.value?.map((widget) => (
        <Expandable key={widget?.id} title={widget?.title} data={widget} />
      ))}
    </Sidebar>
  );
}

export default ComponentSidebar;

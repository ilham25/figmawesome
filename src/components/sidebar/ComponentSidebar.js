import Expandable from "components/shared/Expandable";
import React from "react";
import { widgetData } from "utils";
import Sidebar from ".";

function ComponentSidebar() {
  return (
    <Sidebar header="Widget List">
      {widgetData?.map((widget) => (
        <Expandable key={widget?.id} title={widget?.title} data={widget} />
      ))}
    </Sidebar>
  );
}

export default ComponentSidebar;

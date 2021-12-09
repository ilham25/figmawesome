import React from "react";

import MainCanvas from "components/canvas";
import NavBar from "components/navbar/NavBar";
import ComponentSidebar from "components/sidebar/ComponentSidebar";
import PropertiesSidebar from "components/sidebar/PropertiesSidebar";

const App = () => {
  return (
    <div className="h-screen w-screen overflow-hidden bg-gray-200">
      <NavBar />
      <div className="grid grid-cols-6 h-full">
        <ComponentSidebar />
        <MainCanvas />
        <PropertiesSidebar />
      </div>
    </div>
  );
};

export default App;

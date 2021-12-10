import React from "react";
import FillComponent from "./FillComponent";

function FillTools({ header = "FillTools" }) {
  return (
    <div className="py-4 px-2">
      <p className="text-xxs font-semibold pl-2 mb-2 pointer-events-none">
        {header}
      </p>
      <FillComponent />
    </div>
  );
}

export default FillTools;

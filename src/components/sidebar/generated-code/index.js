import React from "react";
import CodeComponent from "./code";

function GeneratedCode() {
  return (
    <div className="w-full h-full max-h-64 border-t border-gray-200 py-4 px-2">
      <p className="text-xxs font-semibold pl-2 mb-2 pointer-events-none">
        Generated Code
      </p>
      <CodeComponent />
    </div>
  );
}

export default GeneratedCode;

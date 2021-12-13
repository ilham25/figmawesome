import React, { useEffect } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";

const code = `awful.widget.button {
    image   = beautiful.awesome_icon,
    buttons = {
        awful.button({}, 1, nil, function ()
            print("Mouse was clicked")
        end)
    }
}
`;

function CodeComponent() {
  return (
    <div className="w-full h-full bg-gray-100 rounded-sm overflow-hidden">
      <SyntaxHighlighter
        language="lua"
        style={atomOneDark}
        showLineNumbers
        customStyle={{ fontSize: 10, height: "100%" }}
        wrapLongLines
        codeTagProps={{ className: "h-full" }}
      >
        {code}
      </SyntaxHighlighter>
    </div>
  );
}

export default CodeComponent;

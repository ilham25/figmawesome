import { useState } from "react";
import { AiFillCaretRight } from "react-icons/ai";

function Expandable({ title = "Frame", children, isChildren }) {
  const [isExpand, setIsExpand] = useState(false);
  return (
    <div>
      <div className="py-2 px-2 border border-transparent hover:border-cyan-500 cursor-default flex group">
        <div className="flex items-center">
          <div
            className="h-full flex items-center pr-1"
            onClick={() => setIsExpand((prev) => !prev)}
          >
            <AiFillCaretRight
              size={8}
              className={`text-gray-400 opacity-0  ${
                isExpand ? "transform rotate-90" : "transform rotate-0"
              } group-hover:opacity-100`}
            />
          </div>
          <p
            className={`text-xxs ${
              !isChildren ? "font-semibold" : "font-normal"
            }`}
          >
            {title}
          </p>
        </div>
      </div>
      {isExpand && <div className="pl-3">{children}</div>}
    </div>
  );
}

export default Expandable;

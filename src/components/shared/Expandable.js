import { useState } from "react";
import { AiFillCaretRight } from "react-icons/ai";

function Expandable({ title = "Frame", isChildren, data }) {
  const [isExpand, setIsExpand] = useState(false);
  const hasChildren = data?.child?.length > 0;

  return (
    <button
      className={`w-full outline-none ${
        !isChildren ? "focus:bg-cyan-50 " : "focus:bg-gray-100"
      }`}
    >
      <div
        className={`py-2 px-2 border border-transparent hover:border-cyan-500 cursor-default flex group`}
        onDoubleClick={() => {
          if (hasChildren) {
            setIsExpand((prev) => !prev);
          }
        }}
      >
        <div className="flex items-center">
          <div
            className="h-full flex items-center pr-1"
            onClick={() => {
              if (hasChildren) {
                setIsExpand((prev) => !prev);
              }
            }}
          >
            <AiFillCaretRight
              size={8}
              className={`text-gray-400 opacity-0  ${
                isExpand ? "transform rotate-90" : "transform rotate-0"
              } ${hasChildren && "group-hover:opacity-100"}`}
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
      {hasChildren && (
        <>
          {isExpand && (
            <div className="pl-3">
              {data?.child?.map((child, idx) => (
                <Expandable
                  key={child?.id}
                  title={child?.title}
                  data={child}
                  isChildren
                />
              ))}
            </div>
          )}
        </>
      )}
    </button>
  );
}

export default Expandable;

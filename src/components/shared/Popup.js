import React, { useEffect, useState } from "react";
import { AiFillCaretRight } from "react-icons/ai";
import { useDispatch } from "react-redux";

import { changeSelectedTool } from "reducer/selectedToolSlice";

const PopupList = ({ data, selectedElementProps }) => {
  const [isActive, setIsActive] = useState(null);
  const { set: setSelected } = selectedElementProps;

  return (
    <>
      {data?.map((item) => (
        <div key={item.key} className="relative group">
          <button
            className="w-full hover:bg-cyan-500 px-4 py-1  cursor-default flex justify-between items-center relative group"
            onMouseEnter={() => {
              setIsActive(item.key);
            }}
            onClick={() => {
              if (item?.child) {
                setSelected(changeSelectedTool(null));
              } else {
                setSelected(changeSelectedTool(item.key));
              }
            }}
          >
            <p className="text-xs text-white whitespace-nowrap mr-5">
              {item?.title}
            </p>
            {item.child && (
              <div className="h-full flex items-end">
                <AiFillCaretRight size={8} className={`text-white`} />
              </div>
            )}
          </button>

          {isActive === item.key && (
            <div className="bg-black py-1 absolute top-0 left-full w-auto rounded-sm z-50 mt-2 ml-1 shadow-sm">
              <PopupList
                data={item?.child}
                selectedElementProps={selectedElementProps}
              />
            </div>
          )}
        </div>
      ))}
    </>
  );
};

function Popup({ data }) {
  const setSelectedElement = useDispatch();

  return (
    <div className="bg-black  py-1 absolute origin-bottom-right left-1/2  w-auto rounded-sm transform -translate-x-1/2 z-50 mt-2 shadow-sm">
      <ul>
        <PopupList
          data={data}
          selectedElementProps={{
            set: setSelectedElement,
          }}
        />
      </ul>
    </div>
  );
}

export default Popup;

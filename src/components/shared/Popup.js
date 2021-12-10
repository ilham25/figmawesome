import React from "react";
import { AiFillCaretRight } from "react-icons/ai";

const PopupList = ({ title, data }) => {
  let hasChildren = data?.child;
  return (
    <button className="w-full hover:bg-cyan-500 px-4 py-1 relative group cursor-default flex justify-between items-center">
      <p className="text-xs text-white whitespace-nowrap mr-5">{title}</p>
      <div className="h-full flex items-end ">
        <AiFillCaretRight size={8} className={`text-white`} />
      </div>
      {/* <div className="absolute top-0 origin-bottom-right hidden group-focus:block w-5 h-5 bg-black">
        <ul>
          <li>aowekoawe</li>
        </ul>
      </div> */}
    </button>
  );
};

// const PopupChild = ({ data }) => {
//   return (
//     <ul>
//       <PopupList />
//     </ul>
//   );
// };

function Popup({ data }) {
  return (
    <div className="bg-black  py-1 absolute origin-bottom-right left-1/2  w-auto rounded-sm transform -translate-x-1/2 z-50 mt-2">
      <ul>
        {data?.map((item) => (
          <PopupList key={item.key} title={item.title} data={data} />
        ))}
      </ul>
    </div>
  );
}

export default Popup;

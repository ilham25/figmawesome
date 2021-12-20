import { useEffect, useState } from "react";
import {
  AiFillCaretRight,
  AiOutlineAppstore,
  AiOutlineDeploymentUnit,
  AiOutlineFundProjectionScreen,
  AiOutlineInsertRowAbove,
  AiOutlineLayout,
  AiOutlineZoomIn,
} from "react-icons/ai";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { removeHovered, setHovered } from "reducer/componentListSlice";

function Expandable({ title = "Frame", isChildren, data }) {
  const componentList = useSelector((state) => state.componentList);
  const dispatch = useDispatch();

  const [isExpand, setIsExpand] = useState(false);
  const [child, setChild] = useState([]);

  const hasChildren = data?.parentId !== data?.id;

  const handleIcon = (group) => {
    switch (group) {
      case "components":
        return AiOutlineDeploymentUnit;
      case "containers":
        return AiOutlineAppstore;
      case "layouts":
        return AiOutlineLayout;

      case "popbars":
        return AiOutlineInsertRowAbove;
      case "frames":
        return AiOutlineFundProjectionScreen;

      default:
        return AiOutlineDeploymentUnit;
    }
  };

  const Icon = handleIcon(data?.group);

  useEffect(() => {
    const filterChildren = componentList?.value?.filter(
      (comp) => comp?.parentId === data?.id
    );
    setChild(filterChildren);
  }, [componentList]);

  return (
    <button
      className={`w-full outline-none ${
        !isChildren ? "focus:bg-cyan-50 " : "focus:bg-gray-100"
      }`}
    >
      <div
        className={`py-2 px-2 border ${
          componentList?.hoveredId === data?.id
            ? "border-cyan-500"
            : "border-transparent"
        } hover:border-cyan-500 cursor-default flex group`}
        onDoubleClick={() => {
          if (hasChildren) {
            setIsExpand((prev) => !prev);
          }
        }}
        onMouseEnter={() => {
          dispatch(setHovered(data?.id));
        }}
        onMouseLeave={() => {
          if (!componentList?.selectedId) {
            dispatch(removeHovered(data?.id));
          }
        }}
      >
        <div className="flex items-center">
          <div
            className="h-full flex items-center"
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
          <div className="h-full flex items-center pl-1 pr-2">
            <Icon size={16} className={`text-black`} />
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
              {child?.map((children, idx) => (
                <Expandable
                  key={children?.id}
                  title={children?.title}
                  data={children}
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

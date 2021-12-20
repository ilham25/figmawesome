import React, { useRef } from "react";
import { Layer, Rect, Text } from "react-konva";
import { useDispatch } from "react-redux";
import {
  changeProperties,
  removeHovered,
  setHovered,
} from "reducer/componentListSlice";

function FrameComponent({
  dispatch,
  data: props,
  scale,
  draggable,
  dataSource,
}) {
  //   const dispatch = useDispatch();

  const [isHovered, setIsHovered] = React.useState(false);
  const [isSelected, setIsSelected] = React.useState(false);
  const [child, setChild] = React.useState(
    dataSource?.filter((data) => data?.parentId === props.id)
  );

  const handleDragEnd = (e) => {
    const selectedComponent = props;

    const payload = {
      ...selectedComponent,
      properties: {
        ...selectedComponent.properties,
        x: e.target.x(),
        y: e.target.y(),
      },
    };

    dispatch(changeProperties(payload));
  };

  const handleScaling = (initValue, scaleValue) => {
    return initValue > 1 ? 1 : initValue * scaleValue;
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
    dispatch(setHovered(props.id));
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    dispatch(removeHovered());
  };

  React.useEffect(() => {
    if (dataSource?.length > 0) {
      setChild(dataSource?.filter((data) => data?.parentId === props.id));
    }
  }, [dataSource]);

  return (
    <Layer
      id={props.id}
      x={props.properties.x}
      y={props.properties.y}
      clipX={-3}
      clipY={-15}
      clipHeight={props.properties.height + 18}
      clipWidth={props.properties.width + 6}
      height={props.properties.height + 6}
      width={props.properties.width + 6}
      draggable={draggable}
      onDragEnd={handleDragEnd}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Text
        text={props?.title}
        y={-15}
        fill={isHovered || isSelected ? "#33aeff" : "#525252"}
        // scaleX={handleScaling(scale?.x, 1.2)}
        // scaleY={handleScaling(scale?.y, 1.2)}
      />
      {(isHovered || isSelected) && (
        <Rect
          height={props.properties?.height}
          width={props.properties?.width}
          strokeEnabled
          stroke="#33aeff"
          strokeWidth={3}
        />
      )}
      <Rect
        height={props.properties?.height}
        width={props.properties?.width}
        fill={props.properties.fill}
        opacity={props.properties?.opacity}
        rotation={props.properties?.rotation}
        // onMouseEnter={handleMouseEnter}
        // onMouseLeave={handleMouseLeave}
        // onClick={handleMouseEnter}
        cornerRadius={props?.properties?.cornerRadius}
      />
    </Layer>
  );
}

export const Frame = React.memo(FrameComponent);

export default Frame;

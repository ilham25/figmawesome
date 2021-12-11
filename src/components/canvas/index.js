import React, { useEffect, useRef, useState } from "react";
import { Stage, Layer, Star, Transformer, Rect } from "react-konva";
import { useDebounce } from "use-debounce";
import { v4 as uuidv4 } from "uuid";

import useWindowSize from "hooks/useWindowSize";
import { useDispatch, useSelector } from "react-redux";
import { changeZoom } from "reducer/zoomSlice";
import {
  addComponent,
  onMouseEnter,
  onMouseLeave,
  changeSelectedComponent,
  changeProperties,
} from "reducer/componentListSlice";
import { resetTool } from "reducer/selectedToolSlice";
import { toolTitleList } from "utils";

function MainCanvas() {
  const mainCanvasRef = useRef(null);
  const trRef = useRef(null);

  const componentList = useSelector((state) => state.componentList);
  const selectedTool = useSelector((state) => state.selectedTool);
  const dispatch = useDispatch();

  const [width, height] = useWindowSize();
  const [canvasSize, setCanvasSize] = useState({ height: 100, width: 100 });
  const [scaleRaw, setScaleRaw] = useState({ x: 1, y: 1 });
  const [scale] = useDebounce(scaleRaw, 200);

  const [components, setComponents] = useState([]);

  const [shouldAdd, setShouldAdd] = useState(selectedTool.value);
  const [shouldGrab, setShouldGrab] = useState(false);

  const handleDragStart = (e) => {
    const id = e.target.id();
    const selectedComponent = components.find((comp) => comp.id === id);

    const payload = {
      ...selectedComponent,
      properties: {
        ...selectedComponent.properties,
        isDragging: true,
      },
    };

    dispatch(changeProperties(payload));
  };
  const handleDragEnd = (e) => {
    const id = e.target.id();
    const selectedComponent = components.find((comp) => comp.id === id);

    const payload = {
      ...selectedComponent,
      properties: {
        ...selectedComponent.properties,
        x: e.target.x(),
        y: e.target.y(),
        isDragging: false,
      },
    };

    dispatch(changeProperties(payload));
  };
  const handleMouseEnter = (e) => {
    const id = e.target.id();
    dispatch(onMouseEnter(id));
  };
  const handleMouseLeave = (e) => {
    // if (!componentList?.selectedId) {
    const id = e.target.id();
    dispatch(onMouseLeave(id));
    // }
  };
  const handleOnWheel = (e) => {
    if (e.evt.ctrlKey) {
      let scaleX = e.currentTarget.scaleX();
      let scaleY = e.currentTarget.scaleY();

      if (e.evt.deltaY < 0) {
        if (scaleX < 10 || scaleY < 10) {
          if (scaleX >= 0.2 || scaleY >= 0.2) {
            scaleX = scaleX + 0.05;
            scaleY = scaleY + 0.05;
          } else {
            scaleX = scaleX + 0.01;
            scaleY = scaleY + 0.01;
          }
        }
      } else {
        if (scaleX > 0.02 || scaleY > 0.02) {
          if (scaleX <= 0.2 || scaleY <= 0.2) {
            scaleX = scaleX - 0.01;
            scaleY = scaleY - 0.01;
          } else {
            scaleX = scaleX - 0.05;
            scaleY = scaleY - 0.05;
          }
        }
      }

      if (scale.x != scaleX || scale.y !== scaleY) {
        e.currentTarget.scaleX(scaleX);
        e.currentTarget.scaleY(scaleY);
        setScaleRaw({
          x: scaleX,
          y: scaleY,
        });
      }
    } else {
      if (e.evt.deltaY < 0) {
        e.currentTarget.offsetY(e.currentTarget.offsetY() - 20);
      } else {
        e.currentTarget.offsetY(e.currentTarget.offsetY() + 20);
      }
    }
  };
  const handleOnClick = (e) => {
    let position = e.currentTarget.getRelativePointerPosition();
    if (shouldAdd) {
      dispatch(
        addComponent({
          id: uuidv4(),
          title: toolTitleList[selectedTool?.value],
          key: selectedTool?.value,
          group: selectedTool?.navTool,
          properties: {
            isDragging: false,
            x: position.x,
            y: position.y,
            stroke: "#33aeff",
            strokeWidth: 3,
            strokeEnabled: true,
            height: 100,
            width: 100,
            opacity: 1,
            fill: "#c4c4c4",
            rotation: 0,
          },
          parentId: e.target?.attrs?.id ?? undefined,
        })
      );
      dispatch(resetTool());
    }
    if (e.target.attrs.id) {
      dispatch(changeSelectedComponent(e.target.attrs.id));
    } else {
      dispatch(changeSelectedComponent(null));
    }
  };

  useEffect(() => {
    if (selectedTool?.value) {
      setShouldAdd(selectedTool?.value);
    } else {
      setShouldAdd(null);
    }
  }, [selectedTool]);

  useEffect(() => {
    if (mainCanvasRef) {
      setCanvasSize({
        height: mainCanvasRef.current.offsetHeight,
        width: mainCanvasRef.current.offsetWidth,
      });
    }
  }, [mainCanvasRef, width, height]);

  useEffect(() => {
    window.addEventListener("keypress", (e) => {
      if (e.key === "r") {
        setShouldAdd(true);
      }
    });
    window.addEventListener("keydown", (e) => {
      if (e.key === " ") {
        setShouldGrab(true);
      }
    });
    window.addEventListener("keyup", (e) => {
      if (e.key === " ") {
        setShouldGrab(false);
      }
    });
    window.addEventListener(
      "wheel",
      (e) => {
        if (e.ctrlKey) {
          e.preventDefault();
        }
      },
      { passive: false }
    );
  }, []);

  useEffect(() => {
    let zoomValue = (scale.x + scale.y) / 2;
    dispatch(changeZoom(zoomValue));
  }, [scale]);

  useEffect(() => {
    setComponents(componentList?.value);
    // console.log(componentList);
  }, [componentList]);

  return (
    <div
      ref={mainCanvasRef}
      className={`col-span-4 mb-12 overflow-hidden ${
        shouldAdd && "cursor-crosshair"
      } ${shouldGrab && "cursor-grab"}`}
    >
      <Stage
        width={canvasSize.width}
        height={canvasSize.height}
        onWheel={handleOnWheel}
        draggable={shouldGrab}
        onClick={handleOnClick}
      >
        <Layer>
          {components.map((star) => (
            <Rect
              key={star.id}
              id={star.id}
              x={star.properties.x}
              y={star.properties.y}
              height={star.properties?.height}
              width={star.properties?.width}
              fill={star.properties.fill}
              opacity={star.properties?.opacity}
              rotation={star.properties?.rotation}
              draggable={!shouldGrab}
              onDragStart={handleDragStart}
              onDragEnd={handleDragEnd}
              strokeEnabled={star?.properties.stroke}
              stroke={star?.properties.stroke}
              strokeWidth={star?.properties.strokeWidth}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              onClick={handleMouseEnter}
              cornerRadius={star?.properties?.cornerRadius}
            />
          ))}
        </Layer>
      </Stage>
    </div>
  );
}

export default MainCanvas;

import React, { useEffect, useRef, useState } from "react";
import { Stage, Layer, Star, Transformer, Rect } from "react-konva";
import { useDebounce } from "use-debounce";

import useWindowSize from "hooks/useWindowSize";
import { useDispatch, useSelector } from "react-redux";
import { changeZoom } from "reducer/zoomSlice";

// function generateShapes() {
//   return [...Array(10)].map((_, i) => ({
//     id: i.toString(),
//     x: Math.random() * window.innerWidth,
//     y: Math.random() * window.innerHeight,
//     isDragging: false,
//     stroke: "transparent",
//     strokeWidth: 3,
//     strokeEnabled: true,
//   }));
// }

// const INITIAL_STATE = generateShapes();

function MainCanvas() {
  const mainCanvasRef = useRef(null);
  const trRef = useRef(null);

  const zoom = useSelector((state) => state.zoom);
  const dispatch = useDispatch();

  const [width, height] = useWindowSize();
  const [canvasSize, setCanvasSize] = useState({ height: 100, width: 100 });
  const [scaleRaw, setScaleRaw] = useState({ x: 1, y: 1 });
  const [scale] = useDebounce(scaleRaw, 200);

  const [stars, setStars] = useState([]);
  const [shouldAdd, setShouldAdd] = useState(false);

  const handleDragStart = (e) => {
    const id = e.target.id();
    setStars(
      stars.map((star) => {
        return {
          ...star,
          isDragging: star.id === id,
        };
      })
    );
  };
  const handleDragEnd = (e) => {
    setStars(
      stars.map((star) => {
        return {
          ...star,
          isDragging: false,
        };
      })
    );
  };
  const handleMouseEnter = (e) => {
    const id = e.target.id();
    setStars(
      stars.map((star) => {
        return {
          ...star,
          stroke: star.id === id ? "#33aeff" : undefined,
        };
      })
    );
  };
  const handleMouseLeave = (e) => {
    const id = e.target.id();
    setStars(
      stars.map((star) => {
        return {
          ...star,
          stroke: star.id === id ? "transparent" : undefined,
        };
      })
    );
  };

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
  }, []);

  useEffect(() => {
    let zoomValue = (scale.x + scale.y) / 2;
    dispatch(changeZoom(zoomValue));
  }, [scale]);

  return (
    <div
      ref={mainCanvasRef}
      className={`col-span-4 mb-12 overflow-hidden ${
        shouldAdd && "cursor-crosshair"
      }`}
    >
      <Stage
        width={canvasSize.width}
        height={canvasSize.height}
        onWheel={(e) => {
          let scaleX = e.target.scaleX();
          let scaleY = e.target.scaleY();

          let scaleXChange = scaleX;
          let scaleYChange = scaleY;

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
            e.target.scaleX(scaleX);
            e.target.scaleY(scaleY);
            setScaleRaw({
              x: scaleX,
              y: scaleY,
            });
          }
        }}
        // scale={scale}
        draggable
        // onContextMenu={() => {
        //   setShouldAdd(true);
        // }}
        onClick={(e) => {
          if (shouldAdd) {
            setStars((prev) => [
              ...prev,
              {
                id: Math.floor(Math.random() * 1000),
                isDragging: false,
                x: e.evt.offsetX,
                y: e.evt.offsetY,
                stroke: "transparent",
                strokeWidth: 3,
                strokeEnabled: true,
              },
            ]);
            setShouldAdd(false);
          }
        }}
      >
        <Layer>
          {stars.map((star) => (
            <Rect
              key={star.id}
              id={star.id}
              x={star.x}
              y={star.y}
              height={100}
              width={100}
              fill="#fff"
              opacity={1}
              draggable
              onDragStart={handleDragStart}
              onDragEnd={handleDragEnd}
              strokeEnabled={star?.stroke}
              stroke={star?.stroke}
              strokeWidth={star?.strokeWidth}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              onClick={handleMouseEnter}
            />
          ))}
        </Layer>
      </Stage>
    </div>
  );
}

export default MainCanvas;

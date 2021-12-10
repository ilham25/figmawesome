import React, { useEffect, useRef, useState } from "react";
import { Stage, Layer, Star, Transformer } from "react-konva";
import { useDebounce } from "use-debounce";

import { useWindowSize } from "utils/hooks";

function generateShapes() {
  return [...Array(10)].map((_, i) => ({
    id: i.toString(),
    x: Math.random() * window.innerWidth,
    y: Math.random() * window.innerHeight,
    rotation: Math.random() * 180,
    isDragging: false,
  }));
}

const INITIAL_STATE = generateShapes();

function MainCanvas() {
  const mainCanvasRef = useRef(null);
  const trRef = useRef(null);

  const [width, height] = useWindowSize();
  const [canvasSize, setCanvasSize] = useState({ height: 0, width: 0 });
  const [scaleRaw, setScaleRaw] = useState({ x: 1, y: 1 });
  const [scale] = useDebounce(scaleRaw, 200);

  const [stars, setStars] = useState(INITIAL_STATE);

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

  useEffect(() => {
    if (mainCanvasRef) {
      setCanvasSize({
        height: mainCanvasRef.current.offsetHeight,
        width: mainCanvasRef.current.offsetWidth,
      });
    }
  }, [mainCanvasRef, width, height]);

  return (
    <div ref={mainCanvasRef} className="col-span-4 mb-12 overflow-hidden">
      <Stage
        width={canvasSize.width}
        height={canvasSize.height}
        onWheel={(e) => {
          let scaleX = e.target.scaleX();
          let scaleY = e.target.scaleY();

          if (e.evt.deltaY < 0) {
            // setScaleRaw((prev) => ({
            //   x: scaleX + 0.05,
            //   y: scaleY + 0.05,
            // }));
            e.target.scaleX(scaleX + 0.05);
            e.target.scaleY(scaleY + 0.05);
          } else {
            // setScaleRaw((prev) => ({
            //   x: scaleX - 0.05,
            //   y: scaleY - 0.05,
            // }));
            e.target.scaleX(scaleX - 0.05);
            e.target.scaleY(scaleY - 0.05);
          }
        }}
        // scale={scale}
        draggable
      >
        <Layer>
          {stars.map((star) => (
            <>
              <Star
                key={star.id}
                id={star.id}
                x={star.x}
                y={star.y}
                numPoints={5}
                innerRadius={20}
                outerRadius={40}
                fill="#89b717"
                opacity={0.8}
                draggable
                rotation={star.rotation}
                shadowColor="black"
                shadowBlur={10}
                shadowOpacity={0.6}
                shadowOffsetX={star.isDragging ? 10 : 5}
                shadowOffsetY={star.isDragging ? 10 : 5}
                scaleX={star.isDragging ? 1.2 : 1}
                scaleY={star.isDragging ? 1.2 : 1}
                onDragStart={handleDragStart}
                onDragEnd={handleDragEnd}
              />
            </>
          ))}
        </Layer>
      </Stage>
    </div>
  );
}

export default MainCanvas;

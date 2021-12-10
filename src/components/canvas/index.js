import React, { useEffect, useRef, useState } from "react";
import { Layer, Stage } from "react-konva";
import { useWindowSize } from "utils/hooks";

function MainCanvas() {
  const mainCanvasRef = useRef(null);

  const [width, height] = useWindowSize();
  const [canvasSize, setCanvasSize] = useState({ height: 0, width: 0 });

  useEffect(() => {
    if (mainCanvasRef) {
      setCanvasSize({
        height: mainCanvasRef.current.offsetHeight,
        width: mainCanvasRef.current.offsetWidth,
      });
    }
  }, [mainCanvasRef, width, height]);

  return (
    <div ref={mainCanvasRef} className="col-span-4 mb-12 overflow-auto">
      <Stage width={canvasSize.width} height={canvasSize.height}>
        <Layer></Layer>
      </Stage>
    </div>
  );
}

export default MainCanvas;

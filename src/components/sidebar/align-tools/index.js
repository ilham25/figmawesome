import React from "react";
import {
  AiOutlineVerticalAlignBottom,
  AiOutlineVerticalAlignMiddle,
  AiOutlineVerticalAlignTop,
  AiOutlineVerticalLeft,
  AiOutlineVerticalRight,
} from "react-icons/ai";
import AlignButton from "./AlignButton";

function AlignTools() {
  return (
    <div className="w-full grid grid-cols-6 py-2 px-1">
      <AlignButton
        className="transform -rotate-90"
        icon={AiOutlineVerticalAlignTop}
        title="Align Left"
      />
      <AlignButton
        className="transform rotate-90"
        icon={AiOutlineVerticalAlignMiddle}
        title="Align horizontal centers"
      />
      <AlignButton
        className="transform -rotate-90"
        icon={AiOutlineVerticalAlignBottom}
        title="Align Right"
      />
      <AlignButton icon={AiOutlineVerticalAlignTop} title="Align Top" />
      <AlignButton
        icon={AiOutlineVerticalAlignMiddle}
        title="Align vertical centers"
      />
      <AlignButton icon={AiOutlineVerticalAlignBottom} title="Align Bottom" />
    </div>
  );
}

export default AlignTools;

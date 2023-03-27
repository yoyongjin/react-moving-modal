import React from "react";
import Draggable from "react-draggable";

const DragModal = () => {
  return (
    <Draggable handle="strong">
      <div
        className="box no-cursor"
        style={{ display: "flex", flexDirection: "column" }}
      >
        <strong className="cursor">
          <div>Drag here</div>
        </strong>
        <div style={{ overflow: "scroll" }}>
          <div style={{ background: "yellow", whiteSpace: "pre-wrap" }}>
            I have long scrollable content with a handle
            {"\n" + Array(40).fill("x").join("\n")}
          </div>
        </div>
      </div>
    </Draggable>
  );
};

export default DragModal;

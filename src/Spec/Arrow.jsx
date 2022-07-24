import "./Arrow.scss";

import React from "react";

function Arrow({from, to, isActive}) {
  if (!from || !to) {
    return null;
  }

  const props = {
    "data-col": from.col,
    "data-row": from.row,
  };

  const height = 24 - (to.row - from.row);
  const width = Math.abs(to.col - from.col) * 40 + 40;
  const direction = getArrowDirection(from, to);
  // if (direction === "right-down" || direction === "left-down") {
  //   props["data-height"] = height;
  //   props["data-width"] = width;
  // } else {
  //   props["data-length"] = to.row === from.row ? width : height;
  // }

  return (
    <div
      className={`arrow`}
      style={{
        display: "block",
        backgroundImage: "url(./arrows/down.png)",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        height,
        width,
      }}
    />
  );
}

function getArrowDirection(from, to) {
  if (to.row > from.row && to.col === from.col) {
    return "down";
  }

  if (to.row === from.row && to.col > from.col) {
    return "right";
  }

  if (to.row === from.row && to.col < from.col) {
    return "left";
  }

  if (to.row > from.row && to.col === from.col + 1) {
    return "right-down";
  }

  if (to.row > from.row && to.col === from.col - 1) {
    return "left-down";
  }
}

export default Arrow;

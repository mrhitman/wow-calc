import "./Arrow.scss";

import React from "react";

export default function Arrow({from, to, isActive}) {
  if (!from || !to) {
    return null;
  }

  const props = {
    "data-col": from.col,
    "data-row": from.row,
  };

  const height = to.row - from.row;
  const width = Math.abs(to.col - from.col);

  const direction = getArrowDirection(from, to);
  if (direction === "right-down" || direction === "left-down") {
    props["data-height"] = height;
    props["data-width"] = width;
  } else {
    props["data-length"] = to.row === from.row ? width : height;
  }

  const className = [
    "arrow",
    `arrow--${direction}`,
    isActive && "arrow--active",
    direction === "right-down" ||
      (direction === "left-down" && "arrow--side-down"),
  ].join(" ");

  return <div className={className} {...props} />;
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

import "./Arrow.scss";

import React from "react";

const talentBoxSize = 42;
const talentBoxOffset = 24;

function Arrow({from, to, isActive}) {
  if (!from || !to) {
    return null;
  }

  const vDistance = to.row - from.row;
  const hDistance = ~~(to.col - from.col);
  const height =
    talentBoxSize * Math.max(vDistance - 1, 0) + vDistance * talentBoxOffset;
  const width = hDistance * 40 + 40;
  const direction = getArrowDirection(from, to);

  switch (direction) {
    case "down":
      return (
        <div
          className={`arrow`}
          style={{
            display: "block",
            backgroundImage: `url(./arrows/${direction}${
              isActive ? "-active" : ""
            }.png)`,
            backgroundRepeat: "no-repeat",
            backgroundPositionX: "center",
            backgroundPositionY: "bottom",
            marginTop: -height - talentBoxSize,
            height,
            width,
          }}
        />
      );
    case "left":
      return (
        <div
          className={`arrow`}
          style={{
            display: "block",
            float: "right",
            width: 23,
            height: 41,
            marginRight: -25,
            backgroundPositionY: "center",
            backgroundPositionX: "left",
            backgroundRepeat: "no-repeat",
            backgroundImage: `url(./arrows/${direction}${
              isActive ? "-active" : ""
            }.png)`,
          }}
        />
      );
    case "right":
      return (
        <div
          style={{
            display: "block",
            width: 24,
            height: 42,
            float: "left",
            marginLeft: -24,
            backgroundPositionY: "center",
            backgroundPositionX: "right",
            backgroundRepeat: "no-repeat",
            backgroundImage: `url(./arrows/${direction}${
              isActive ? "-active" : ""
            }.png)`,
          }}
        />
      );
    default:
      return null;
  }
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

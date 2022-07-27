import React from "react";

const talentBoxSize = 38;
const talentBoxOffset = 20;

function ArrowRight({isActive}) {
  return (
    <div
      className="arrow arrow-right"
      style={{
        width: talentBoxOffset,
        height: talentBoxSize,
        // marginLeft: -talentBoxOffset,
        backgroundImage: `url(./arrows/right${isActive ? "-active" : ""}.svg)`,
        // backgroundImage: `url(./arrows/right.svg)`,
        position: "absolute",
        right: 40,
        bottom: 0,
        // height: 88,
        // bottom: 30,
        // left: -22,
      }}
    />
  );
}

export default ArrowRight;

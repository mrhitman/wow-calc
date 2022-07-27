import React from "react";

const talentBoxSize = 38;
const talentBoxOffset = 26;

function ArrowLeft({isActive}) {
  return (
    <div
      className="arrow arrow-left"
      style={{
        width: talentBoxOffset,
        height: talentBoxSize,
        // marginRight: -talentBoxOffset,
        backgroundImage: `url(./arrows/left${isActive ? "-active" : ""}.svg)`,
        // backgroundImage: `url(./arrows/left.svg)`,
        // bottom: 30,
        // left: -22,
      }}
    />
  );
}

export default ArrowLeft;

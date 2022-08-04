import React from "react";

const talentBoxSize = 40;
const talentBoxOffset = 20;

function ArrowRight({isActive}) {
  return (
    <div
      className="arrow arrow-right"
      style={{
        width: talentBoxOffset,
        height: talentBoxSize,
        backgroundImage: `url(./images/arrows/right${
          isActive ? "-active" : ""
        }.svg)`,
        right: talentBoxSize,
      }}
    />
  );
}

export default ArrowRight;

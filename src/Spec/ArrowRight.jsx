import React from "react";

const talentBoxSize = 42;
const talentBoxOffset = 26;

function ArrowRight({isActive}) {
  return (
    <div
      className="arrow arrow-right"
      style={{
        width: talentBoxOffset,
        height: talentBoxSize,
        marginLeft: -talentBoxOffset,
        backgroundImage: `url(./arrows/right${isActive ? "-active" : ""}.png)`,
      }}
    />
  );
}

export default ArrowRight;

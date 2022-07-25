import React from "react";

const talentBoxSize = 42;
const talentBoxOffset = 26;

function ArrowLeft({isActive}) {
  console.log("ArrowLeft");
  return (
    <div
      className="arrow arrow-left"
      style={{
        width: talentBoxOffset,
        height: talentBoxSize,
        marginRight: -talentBoxOffset,
        backgroundImage: `url(./arrows/left${isActive ? "-active" : ""}.png)`,
      }}
    />
  );
}

export default ArrowLeft;

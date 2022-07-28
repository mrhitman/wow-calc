import React from "react";

const talentBoxSize = 40;
const talentBoxOffset = 26;

function ArrowLeft({isActive}) {
  return (
    <div
      className="arrow arrow-left"
      style={{
        width: talentBoxOffset,
        height: talentBoxSize,
        left: talentBoxSize,
        backgroundImage: `url(./images/arrows/left${
          isActive ? "-active" : ""
        }.svg)`,
      }}
    />
  );
}

export default ArrowLeft;

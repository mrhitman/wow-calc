import React from "react";

const talentBoxSize = 38;
const talentBoxOffset = 26;

function ArrowDown({isActive, from, to}) {
  const vDistance = to.row - from.row;
  const height =
    talentBoxSize * Math.max(vDistance - 1, 0) +
    vDistance * (talentBoxOffset + 2);

  return (
    <div
      className="arrow arrow-down"
      style={{
        backgroundImage: `url(./images/arrows/down${
          isActive ? "-active" : ""
        }.svg)`,
        bottom: talentBoxSize,
        width: talentBoxSize,
        height,
      }}
    />
  );
}

export default ArrowDown;

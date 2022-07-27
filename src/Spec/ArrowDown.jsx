import React from "react";

const talentBoxSize = 38;
const talentBoxOffset = 26;

function ArrowDown({isActive, from, to}) {
  const vDistance = to.row - from.row;
  const height =
    talentBoxSize * Math.max(vDistance - 1, 0) + vDistance * talentBoxOffset;

  return (
    <div
      className="arrow arrow-down"
      style={{
        backgroundImage: `url(./arrows/down${isActive ? "-active" : ""}.svg)`,
        // backgroundImage: `url(./arrows/new_arrows/big-down.svg)`,
        marginTop: -height - talentBoxSize - 8,
        width: talentBoxSize,
        height,

        // width: talentBoxSize,
        // height: talentBoxOffset,
        // bottom: 135,
        // left: 12,
      }}
    />
  );
}

export default ArrowDown;

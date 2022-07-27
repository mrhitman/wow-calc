import React from "react";

const talentBoxSize = 42;
const talentBoxOffset = 24;
function ArrowRightDown({from, to, isActive}) {
  const vDistance = to.row - from.row;

  return (
    <>
      <div
        className="arrow"
        style={{
          backgroundImage: `url(./arrows/arrow.svg)`,
          backgroundRepeat: "no-repeat",
          backgroundPositionY: "center",
          backgroundPositionX: "right",
          position: "absolute",
          height: talentBoxSize,
          bottom: talentBoxSize * vDistance + talentBoxOffset * vDistance,
          right: 18,
          width: talentBoxOffset + talentBoxSize / 2,
        }}
      />
      <div
        className="arrow arrow-down"
        style={{
          backgroundImage: `url(./arrows/down${isActive ? "-active" : ""}.svg)`,
          backgroundRepeat: "no-repeat",
          bottom: talentBoxSize,
          width: talentBoxSize,
          height:
            talentBoxSize * (vDistance - 1) +
            talentBoxOffset * vDistance +
            talentBoxSize / 2,
        }}
      />
      <div
        className="arrow"
        style={{
          position: "absolute",
          backgroundImage: `url(./arrows/circle${
            isActive ? "-active" : ""
          }.svg)`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          bottom:
            talentBoxSize * vDistance +
            talentBoxOffset * vDistance -
            talentBoxOffset / 2,
          right: -16,
          width: talentBoxSize + talentBoxOffset,
          height: talentBoxSize + talentBoxOffset,
        }}
      />
    </>
  );
}

export default ArrowRightDown;

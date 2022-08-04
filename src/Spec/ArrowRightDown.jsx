import React from "react";

const talentBoxSize = 42;
const talentBoxOffset = 24;
function ArrowRightDown({from, to, isActive}) {
  const vDistance = to.row - from.row;

  return (
    <>
      <div
        className="arrow arrow-right"
        style={{
          backgroundImage: `url(./images/arrows/arrow${
            isActive ? "-active" : ""
          }.svg)`,
          height: talentBoxSize,
          bottom: talentBoxSize * vDistance + talentBoxOffset * vDistance,
          right: 18,
          width: talentBoxOffset + talentBoxSize / 2,
        }}
      />
      <div
        className="arrow arrow-down"
        style={{
          backgroundImage: `url(./images/arrows/down${
            isActive ? "-active" : ""
          }.svg)`,
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
          backgroundImage: `url(./images/arrows/circle${
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

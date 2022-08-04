import React from "react";

const talentBoxSize = 42;
const talentBoxOffset = 24;
function ArrowLeftDown({from, to, isActive}) {
  const vDistance = to.row - from.row;

  return (
    <>
      <div
        className="arrow arrow-left"
        style={{
          backgroundImage: `url(./images/arrows/arrow${
            isActive ? "-active" : ""
          }.svg)`,
          height: talentBoxSize,
          bottom: talentBoxSize * vDistance + talentBoxOffset * vDistance,
          left: 18,
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
          left: -12,
          width: talentBoxSize + talentBoxOffset,
          height: talentBoxSize + talentBoxOffset,
        }}
      />
    </>
  );
}

export default ArrowLeftDown;

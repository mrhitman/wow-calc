import "./Arrow.scss";

import ArrowDown from "./ArrowDown";
import ArrowLeft from "./ArrowLeft";
import ArrowRight from "./ArrowRight";
import React from "react";
import {getArrowDirection} from "../store/tools";

function Arrow({from, to, isActive}) {
  if (!from || !to) {
    return null;
  }

  const direction = getArrowDirection(from, to);
  switch (direction) {
    case "down":
      return <ArrowDown isActive={isActive} from={from} to={to} />;
    case "left":
      return <ArrowLeft isActive={isActive} from={from} to={to} />;
    case "right":
      return <ArrowRight isActive={isActive} from={from} to={to} />;
    case "left-down":
      return (
        <>
          <div
            className="arrow"
            style={{
              backgroundImage: `url(./arrows/arrow.svg)`,
              backgroundRepeat: "no-repeat",
              backgroundPositionY: "center",
              backgroundPositionX: "left",
              // position: "absolute",
              // height: 14,
              // width: 40,
              // bottom: 80,
              // left: 18,
              height: 38,
              marginTop: -110,
              marginLeft: 24 / 2,
              width: 42 + 24 / 2,
            }}
          />
          <div
            className="arrow arrow-down"
            style={{
              backgroundImage: `url(./arrows/down.svg)`,
              backgroundRepeat: "no-repeat",
              // position: "absolute",
              // height: 47,
              // width: 14,
              // left: 12,
              // bottom: 42,
            }}
          />
          <div
            className="arrow circle"
            style={{
              backgroundImage: `url(./arrows/circle.svg)`,
              backgroundRepeat: "no-repeat",
              position: "absolute",
              height: 8,
              width: 8,
              left: 15,
              bottom: 83,
            }}
          />
          {/* <div
            className="arrow small-down"
            style={{
              backgroundImage: `url(./arrows/new_arrows/small-down.svg)`,
              backgroundRepeat: "no-repeat",
              height: 24,
              width: 14,
              position: "absolute",
              top: 100,
              right: 50,
            }}
          /> */}
          {/* <div
            className="arrow small-right"
            style={{
              backgroundImage: `url(./arrows/new_arrows/small-right.svg)`,
              backgroundRepeat: "no-repeat",
              height: 14,
              width: 24,
              position: "absolute",
              bottom: 335,
              left: 129,
            }}
          /> */}
        </>
      );
    case "right-down":
      return (
        <>
          <div
            className="arrow"
            style={{
              // backgroundImage: `url(./arrows/rightdown.png)`,
              // backgroundImage: `url(./arrows/new_arrows/right-down.svg)`,
              backgroundImage: `url(./arrows/arrow.svg)`,
              backgroundRepeat: "no-repeat",
              backgroundPositionY: "center",
              backgroundPositionX: "right",
              position: "absolute",
              height: 42,
              marginTop: -110,
              marginLeft: -24,
              // height: 49,
              // width: 53,
              // top: 125,
              // right: 28,
              width: 42 + 24 / 2,
            }}
          />
          {/* <div
            className="arrow arrow-down"
            style={{
              backgroundImage: `url(./arrows/down.png)`,
              backgroundRepeat: "no-repeat",
              height: 24 * 2,
              marginTop: -42 + 24,
            }}
          /> */}
        </>
      );
    default:
      return null;
  }
}

export default Arrow;

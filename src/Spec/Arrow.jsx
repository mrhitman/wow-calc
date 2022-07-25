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
              backgroundImage: `url(./arrows/leftdown.png)`,
              backgroundRepeat: "no-repeat",
              backgroundPositionY: "center",
              backgroundPositionX: "left",
              height: 42,
              marginTop: -110,
              marginLeft: 24 / 2,
              width: 42 + 24 / 2,
            }}
          />
          <div
            className="arrow arrow-down"
            style={{
              backgroundImage: `url(./arrows/down.png)`,
              backgroundRepeat: "no-repeat",
              height: 24 * 2,
              marginTop: -42 + 24,
            }}
          />
        </>
      );
    case "right-down":
      return (
        <>
          <div
            className="arrow"
            style={{
              backgroundImage: `url(./arrows/rightdown.png)`,
              backgroundRepeat: "no-repeat",
              backgroundPositionY: "center",
              backgroundPositionX: "right",
              height: 42,
              marginTop: -110,
              marginLeft: -24,
              width: 42 + 24 / 2,
            }}
          />
          <div
            className="arrow arrow-down"
            style={{
              backgroundImage: `url(./arrows/down.png)`,
              backgroundRepeat: "no-repeat",
              height: 24 * 2,
              marginTop: -42 + 24,
            }}
          />
        </>
      );
    default:
      return null;
  }
}

export default Arrow;

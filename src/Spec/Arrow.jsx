import "./Arrow.scss";

import ArrowDown from "./ArrowDown";
import ArrowLeft from "./ArrowLeft";
import ArrowLeftDown from "./ArrowLeftDown";
import ArrowRight from "./ArrowRight";
import ArrowRightDown from "./ArrowRightDown";
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
      return <ArrowLeftDown isActive={isActive} from={from} to={to} />;
    case "right-down":
      return <ArrowRightDown isActive={isActive} from={from} to={to} />;
    default:
      return null;
  }
}

export default Arrow;

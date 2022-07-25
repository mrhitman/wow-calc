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
    default:
      return null;
  }
}

export default Arrow;

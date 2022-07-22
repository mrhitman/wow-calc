import React, { useReducer } from "react"

import { reducer } from "./reducer";

export const WowCalculatorContext = React.createContext();
function getInitialState() {
  return {
    classId: null,
    selectedHero: null,
    pointsBySpecs: {},
    points: {},
  }
}
export function useState() {
  return useReducer(reducer, getInitialState());
}
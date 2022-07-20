import React, { useReducer } from "react"
import { reducer } from "./reducer";

export const WowCalculatorContext = React.createContext();
function getInitialState() {
  return {
    selectedHero: null,
  }
}
export function useState() {
  return useReducer(reducer, getInitialState());
}
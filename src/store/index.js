import React from "react";
import Store from "./store";

export const WowCalculatorContext = React.createContext();
export function getInitialState() {
  return new Store();
}
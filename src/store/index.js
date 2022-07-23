import React from "react";

export const WowCalculatorContext = React.createContext();

export function getInitialState() {
  return {
    classId: null,
    selectedHero: null,
    pointsBySpecs: {},
    points: {},
  }
}

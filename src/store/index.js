import React from "react";

export const WowCalculatorContext = React.createContext();

export function getInitialState() {
  return {
    classId: null,
    pointsBySpecs: {},
    points: {},
    glyphs: {},
  }
}

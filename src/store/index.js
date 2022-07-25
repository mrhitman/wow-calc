import React from "react";

export const WowCalculatorContext = React.createContext();

export function getInitialState() {
  return {
    classId: null,
    pointsBySpecs: {}, // @TODO optimize, use more efficiet structure
    points: {},
    glyphs: {},
  }
}

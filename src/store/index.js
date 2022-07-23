import React, { useContext, useEffect, useReducer } from "react"

import { dehydrateTalentString } from "./tools";
import { reducer } from "./reducer";
import { useNavigate } from "react-router-dom";

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

export function useDehydrateTalentString() {
  const navigate = useNavigate();
  const { state } = useContext(WowCalculatorContext);

  useEffect(() => {
    if (state.classId) {
      navigate(`.?t=${dehydrateTalentString(state)}`, {
        replace: true,
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state]);
}
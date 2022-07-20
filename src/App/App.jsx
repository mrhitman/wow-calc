import "./App.scss";

import React, {useReducer} from "react";

import Spec from "../Spec/Spec";
import {WowCalculatorContext} from "../store";
import {reducer} from "../store/reducer";

function App() {
  const [state, dispatch] = useReducer(reducer, {
    selectedHero: null,
  });

  return (
    <WowCalculatorContext.Provider value={{state, dispatch}}>
      <div className="tree">
        <Spec />
        <Spec />
        <Spec />
      </div>
    </WowCalculatorContext.Provider>
  );
}

export default App;

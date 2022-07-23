import "./App.scss";

import {Route, HashRouter as Router, Routes} from "react-router-dom";

import ClassSpecs from "../ClassSpecs/ClassSpecs";
import MainClassPicker from "../ClassPicker/MainClassPicker";
import React from "react";
import {WowCalculatorContext} from "../store";
import {useState} from "../store/hooks";

function App() {
  const [state, dispatch] = useState();

  return (
    <div className="container">
      <WowCalculatorContext.Provider value={{state, dispatch}}>
        <Router>
          <Routes>
            <Route path="/" element={<MainClassPicker />} />
            <Route path=":className" element={<ClassSpecs />} />
          </Routes>
        </Router>
      </WowCalculatorContext.Provider>
    </div>
  );
}

export default App;

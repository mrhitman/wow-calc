import "./App.scss";

import {Route, BrowserRouter as Router, Routes} from "react-router-dom";
import {WowCalculatorContext, useState} from "../store";

import ClassSpecs from "../ClassSpecs/ClassSpecs";
import MainClassPicker from "../ClassPicker/MainClassPicker";
import React from "react";

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

import "./App.scss";

import {Route, BrowserRouter as Router, Routes} from "react-router-dom";
import {WowCalculatorContext, useState} from "../store";

import ClassPicker from "../ClassPicker/ClassPicker";
import ClassSpecs from "../ClassSpecs/ClassSpecs";
import React from "react";

function App() {
  const [state, dispatch] = useState();

  return (
    <div className="container">
      <WowCalculatorContext.Provider value={{state, dispatch}}>
        <Router>
          <Routes>
            <Route path="/" element={<ClassPicker />} />
            <Route path=":className" element={<ClassSpecs />} />
          </Routes>
        </Router>
      </WowCalculatorContext.Provider>
    </div>
  );
}

export default App;

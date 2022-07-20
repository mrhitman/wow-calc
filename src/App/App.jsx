import "./App.scss";

import React from "react";

import {useState, WowCalculatorContext} from "../store";
import ClassSpecs from "../ClassSpecs/ClassSpecs";
import ClassPicker from "../ClassPicker/ClassPicker";
import {BrowserRouter as Router, Route, Routes, Link} from "react-router-dom";

function App() {
  const [state, dispatch] = useState();

  return (
    <WowCalculatorContext.Provider value={{state, dispatch}}>
      <Router>
        <div>
          <Link to="/picker">picker</Link>
          <Link to="/">specs</Link>
        </div>
        <ClassPicker />
        <Routes>
          <Route path="/picker" element={<ClassPicker />} />
          <Route path="/:className" element={<ClassSpecs />} />
        </Routes>
      </Router>
    </WowCalculatorContext.Provider>
  );
}

export default App;

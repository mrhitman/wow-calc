import "./App.scss";

import React from "react";

import {useState, WowCalculatorContext} from "../store";
import ClassSpecs from "../ClassSpecs/ClassSpecs";
import ClassPicker from "../ClassPicker/ClassPicker";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import {classes} from "../store/classes";

function App() {
  const [state, dispatch] = useState();

  return (
    <WowCalculatorContext.Provider value={{state, dispatch}}>
      <Router>
        <ClassPicker />
        <Routes>
          <Route path="/:className" element={<ClassSpecs />} />
          <Route
            path="/"
            element={<Navigate to={`/${classes[0].name}`} replace />}
          />
        </Routes>
      </Router>
    </WowCalculatorContext.Provider>
  );
}

export default App;

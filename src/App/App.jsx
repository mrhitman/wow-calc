import "./App.scss";

import {
  Navigate,
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";
import {WowCalculatorContext, useState} from "../store";

import ClassBanner from "../ClassBanner/ClassBanner";
import ClassPicker from "../ClassPicker/ClassPicker";
import ClassSpecs from "../ClassSpecs/ClassSpecs";
import React from "react";
import {classes} from "../store/data/classes";

function App() {
  const [state, dispatch] = useState();

  return (
    <div className="container">
      <WowCalculatorContext.Provider value={{state, dispatch}}>
        <Router>
          <ClassBanner />
          <ClassPicker />
          <Routes>
            <Route path=":className" element={<ClassSpecs />} />
            <Route
              path="/"
              element={<Navigate to={`/${classes[0].name}`} replace />}
            />
          </Routes>
        </Router>
      </WowCalculatorContext.Provider>
    </div>
  );
}

export default App;

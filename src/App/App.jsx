import "./App.scss";

import {Route, HashRouter as Router, Routes} from "react-router-dom";

import ClassSpecs from "../ClassSpecs/ClassSpecs";
import MainClassPicker from "../ClassPicker/MainClassPicker";
import React from "react";
import ClassBanner from "../ClassBanner/ClassBanner";
import {WowCalculatorContext} from "../store";
import {useState} from "../store/hooks";
import TopBlock from "../HeaderBlock";
import Footer from "../ClassFooter/ClassFooter";

function App() {
  const [state, dispatch] = useState();

  return (
    <div className="wrapper">
      <TopBlock />
      <div className="container">
        <ClassBanner />
        <WowCalculatorContext.Provider value={{state, dispatch}}>
          <Router>
            <Routes>
              <Route path="/" element={<MainClassPicker />} />
              <Route path=":className" element={<ClassSpecs />} />
            </Routes>
          </Router>
        </WowCalculatorContext.Provider>
      </div>
      <Footer />
    </div>
  );
}

export default App;

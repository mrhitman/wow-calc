import "./App.scss";

import React, {memo} from "react";
import {Route, BrowserRouter as Router, Routes} from "react-router-dom";
import {WowCalculatorContext, getInitialState} from "../store";

import ClassBanner from "../ClassBanner/ClassBanner";
import ClassSpecs from "../ClassSpecs/ClassSpecs";
import Footer from "../ClassFooter/ClassFooter";
import MainClassPicker from "../ClassPicker/MainClassPicker";
import SeoContent from "../SeoContent/SeoContent";
import TopBlock from "../HeaderBlock";

function App() {
  return (
    <div className="wrapper flex direction-column justify-between">
      <TopBlock />
      <div className="container">
        <ClassBanner />
        <WowCalculatorContext.Provider value={getInitialState()}>
          <Router>
            <Routes>
              <Route path="/" element={<MainClassPicker />} />
              <Route path=":className" element={<ClassSpecs />} />
            </Routes>
          </Router>
        </WowCalculatorContext.Provider>
        <SeoContent />
        <ClassBanner />
      </div>
      <Footer />
    </div>
  );
}

export default memo(App);

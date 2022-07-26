import "./App.scss";

import {Route, HashRouter as Router, Routes} from "react-router-dom";

import ClassBanner from "../ClassBanner/ClassBanner";
import ClassSpecs from "../ClassSpecs/ClassSpecs";
import Footer from "../ClassFooter/ClassFooter";
import MainClassPicker from "../ClassPicker/MainClassPicker";
import React, {memo} from "react";
import TopBlock from "../HeaderBlock";
import {getInitialState, WowCalculatorContext} from "../store";

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
      </div>
      <div className="seo-content">
        Someone once said that you can’t go home again. But they lacked vision.
        And a temporal discombobulator! Here you can find Guides, News, Tools,
        Forums, and more for WoW Classic, TBC Classic, WotLK, and Shadowlands
      </div>
      <Footer />
    </div>
  );
}

export default memo(App);

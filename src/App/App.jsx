import "./App.scss";

import {Route, HashRouter as Router, Routes} from "react-router-dom";
import {useImagePreloader, useState} from "../store/hooks";

import ClassBanner from "../ClassBanner/ClassBanner";
import ClassSpecs from "../ClassSpecs/ClassSpecs";
import Footer from "../ClassFooter/ClassFooter";
import MainClassPicker from "../ClassPicker/MainClassPicker";
import React from "react";
import TopBlock from "../HeaderBlock";
import {WowCalculatorContext} from "../store";
import {talentsBySpecs} from "../store/data/talents";

function App() {
  const [state, dispatch] = useState();

  useImagePreloader([
    ...Object.values(talentsBySpecs).reduce(
      (acc, spec) => [
        ...acc,
        ...Object.values(spec).map((t) => `./talents/${t.icon}.jpg`),
      ],
      []
    ),
    "./arrows/left-active.png",
    "./arrows/right.png",
    "./arrows/right-active.png",
    "./arrows/down.png",
    "./arrows/down-active.png",
  ]);

  return (
    <div className="wrapper flex direction-column justify-between">
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
      <div className="seo-content">
      Someone once said that you can’t go home again. But they lacked vision. And a temporal discombobulator! Here you can find Guides, News, Tools, Forums, and more for WoW Classic, TBC Classic, WotLK, and Shadowlands
      </div>
      <Footer />
    </div>
  );
}

export default App;

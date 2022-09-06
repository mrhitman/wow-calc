import "./ClassPicker.scss";

import React, { memo } from "react";

import { NavLink } from "react-router-dom";
import { classes } from "../store/data/classes";
import SeoContent from "../SeoContent/SeoContent";

function MainClassPicker() {
  return (
    <>
      <div className="block-title flex direction-column items-center">
        <div className="main-logo">
          <img src="images/wowtalentcalculator-logo.png" alt="PlayCarry" />
        </div>
        <h1 className="main-title">Wrath of the Lich King Talent Calculator</h1>
        <p className="text">Choose your class</p>
      </div>
      <div className="heroes-main flex flex-wrap">
        {classes.map((classInfo) => (
          <NavLink
            key={classInfo.id}
            to={`/${classInfo.name.split(" ").join(" ").toLowerCase(" ")}`}
          >
            <div className="bg-image"></div>
            <div className="cat-block flex items-center">
              <div className="hero-wrapper-main flex items-center">
                <img
                  src={`images/classes/${classInfo.icon.slice(6)}.jpeg`}
                  alt={classInfo.name}
                />
              </div>
              <span className="paragraph">{classInfo.name}</span>
            </div>
          </NavLink>
        ))}
      </div>
      <SeoContent />
    </>
  );
}

export default memo(MainClassPicker);

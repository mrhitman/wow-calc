import "./ClassPicker.scss";

import {NavLink} from "react-router-dom";
import React from "react";
import {classes} from "../store/data/classes";

function MainClassPicker() {
  return (
    <>
      <div className="block-title flex direction-column items-center">
        <div >
          <img src="/src/images/playcarry-logo.png" alt="" />
        </div>
        <h2 className="main-title">
          Wrath of the Lich King Talent Calculator
        </h2>
        <p className="text">Choose your class</p>
      </div>
      <div className="heroes-main flex justify-between flex-wrap">
        {classes.map((classInfo) => (
          <NavLink key={classInfo.id} to={`/${classInfo.name.toLowerCase()}`}>
            <div className="flex items-center">
              <div className="hero-wrapper-main flex items-center">
                <img
                  src={`./classes/${classInfo.icon.slice(6)}.jpeg`}
                  alt={classInfo.name}
                />
              </div>
              <span className="paragraph">Paladin</span>
            </div>
          </NavLink>
        ))}
      </div>
    </>
  );
}

export default MainClassPicker;

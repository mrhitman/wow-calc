import "./ClassPicker.scss";

import {NavLink} from "react-router-dom";
import React from "react";
import {classes} from "../store/data/classes";

function MainClassPicker() {
  return (
    <div className="heroes-main">
      {classes.map((classInfo) => (
        <NavLink key={classInfo.id} to={`/${classInfo.name.toLowerCase()}`}>
          <div className="hero-wrapper-main">
            <img
              src={`./classes/${classInfo.icon.slice(6)}.jpeg`}
              alt={classInfo.name}
            />
          </div>
        </NavLink>
      ))}
    </div>
  );
}

export default MainClassPicker;

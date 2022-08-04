import "./ClassPicker.scss";

import {NavLink} from "react-router-dom";
import React from "react";
import {classes} from "../store/data/classes";

function ClassPicker() {
  return (
    <div className="heroes">
      {classes.map((classInfo) => (
        <NavLink
          key={classInfo.id}
          to={`/${classInfo.name.split(" ").join("").toLowerCase()}`}
        >
          <div className="hero-wrapper">
            <img
              src={`images/classes/${classInfo.icon.slice(6)}.jpeg`}
              alt={classInfo.name}
            />
          </div>
        </NavLink>
      ))}
    </div>
  );
}

export default ClassPicker;

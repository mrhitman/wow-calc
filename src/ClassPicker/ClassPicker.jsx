import "./ClassPicker.scss";

import {Link} from "react-router-dom";
import React from "react";
import {classes} from "../store/data/classes";

function ClassPicker() {
  return (
    <div className="heroes">
      {classes.map((classInfo) => (
        <Link key={classInfo.id} to={`/${classInfo.name.toLowerCase()}`}>
          <div className="hero-wrapper">
            <img
              src={require(`../images/classes/${classInfo.icon.slice(6)}.jpeg`)}
              alt={classInfo.name}
            />
          </div>
        </Link>
      ))}
    </div>
  );
}

export default ClassPicker;

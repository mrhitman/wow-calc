import "./ClassPicker.scss";

import React from "react";
import {classes} from "../store/classes";
import { Link } from "react-router-dom";

function ClassPicker() {

  return (
    <div className="heroes">
      {classes.map((classInfo) => (
        <Link key={classInfo.id} to={`/${classInfo.name.toLowerCase()}`}>
          <div className="hero-wrapper">
            <img src={classInfo.icon} alt={classInfo.name} />
          </div>
        </Link>
      ))}
    </div>
  );
}

export default ClassPicker;

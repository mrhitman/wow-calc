import "./Spec.scss";

import React, {useContext} from "react";
import {WowCalculatorContext} from "../store";
import {actions} from "../store/actions";

export default function Talant({skill}) {
  const context = useContext(WowCalculatorContext);
  const points = context.state.points.filter((p) => p === skill);

  return (
    <div
      className="skill"
      onClick={() => {
        if (points.length === skill.maxPoints) {
          return;
        }

        context.dispatch({
          type: actions.ADD_POINT,
          payload: skill,
        });
      }}
      onContextMenu={(e) => {
        e.preventDefault();

        context.dispatch({
          type: actions.REMOVE_POINT,
          payload: skill,
        });
      }}
    >
      <img
        src="https://wow.zamimg.com/images/wow/icons/medium/class_shaman.jpg"
        alt={skill.name}
      />
      <div className="badge">
        {points.length}/{skill.maxPoints}
      </div>
    </div>
  );
}

import "./Spec.scss";

import React, {useContext} from "react";
import {WowCalculatorContext} from "../store";
import {actions} from "../store/actions";
import {canAddPoint} from "../store/tools";

export default function Talant({skill}) {
  const {state, dispatch} = useContext(WowCalculatorContext);
  const points = state.points[skill.id];

  return (
    <div
      className="skill"
      onClick={() => {
        if (!canAddPoint(state, skill)) {
          return;
        }

        dispatch({
          type: actions.ADD_POINT,
          payload: skill,
        });
      }}
      onContextMenu={(e) => {
        e.preventDefault();

        dispatch({
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
        {points ?? 0}/{skill.maxPoints}
      </div>
    </div>
  );
}

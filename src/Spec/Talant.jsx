import React, {useContext} from "react";

import {WowCalculatorContext} from "../store";
import {actions} from "../store/actions";
import {canAddPoint} from "../store/tools";

export default function Talant({skill}) {
  const context = useContext(WowCalculatorContext);
  const points = context.state.points[skill.id];

  return (
    <div
      className="skill"
      onClick={onTalentLeftClick(context, skill)}
      onContextMenu={onTalentRightClick(context, skill)}
    >
      <img
        src={`https://wow.zamimg.com/images/wow/icons/medium/${skill.icon}.jpg`}
        alt={skill.icon}
      />
      <div className="badge">
        {points ?? 0}/{skill.ranks.length}
      </div>
    </div>
  );
}

function onTalentLeftClick(context, skill) {
  return () => {
    if (!canAddPoint(context.state, skill)) {
      return;
    }

    context.dispatch({
      type: actions.ADD_POINT,
      payload: skill,
    });
  };
}

function onTalentRightClick(context, skill) {
  return (e) => {
    e.preventDefault();

    context.dispatch({
      type: actions.REMOVE_POINT,
      payload: skill,
    });
  };
}

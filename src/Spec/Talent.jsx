import React, {useContext, useState} from "react";

import {Popover} from "react-tiny-popover";
import {WowCalculatorContext} from "../store";
import {actions} from "../store/actions";
import {canAddPoint} from "../store/tools";
import {spells} from "../store/data/spells";

export default function Talant({skill}) {
  const context = useContext(WowCalculatorContext);
  const points = context.state.points[skill.id] ?? 0;
  const [showHint, setShowHint] = useState(false);
  const currentSpell = spells[skill.ranks[Math.max(0, points - 1)]];
  const nextSpell = spells[skill.ranks[points]];

  return (
    <Popover
      isOpen={showHint}
      positions={["top", "right", "left", "bottom"]}
      align="start"
      content={
        <div
          style={{
            display: "block",
            border: "solid 1px white",
            color: "white",
            padding: 20,
            backgroundColor: "grey",
          }}
        >
          <pre>
            {JSON.stringify(
              currentSpell === nextSpell
                ? {nextSpell}
                : {currentSpell, nextSpell},
              null,
              2
            )}
          </pre>
        </div>
      }
    >
      <div
        className="skill"
        onClick={onTalentLeftClick(context, skill)}
        onContextMenu={onTalentRightClick(context, skill)}
        onMouseEnter={() => setShowHint(true)}
        onMouseLeave={() => setShowHint(false)}
      >
        <img
          src={`https://wow.zamimg.com/images/wow/icons/medium/${skill.icon}.jpg`}
          alt={skill.icon}
        />
        <div className="badge">
          {points}/{skill.ranks.length}
        </div>
      </div>
    </Popover>
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

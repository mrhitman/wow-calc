import React, {useCallback, useContext, useState} from "react";
import {canAddPoint, getSpecPoints} from "../store/tools";

import Arrow from "../Spec/Arrow";
import {Popover} from "react-tiny-popover";
import TalentPopover from "./TalentPopover";
import {WowCalculatorContext} from "../store";
import {actions} from "../store/actions";
import {spells} from "../store/data/spells";
import {talentsBySpecs} from "../store/data/talents";
import {useNavigate} from "react-router-dom";

export default function Talent({skill}) {
  const context = useContext(WowCalculatorContext);
  const navigate = useNavigate();

  const points = context.state.points[skill.id] ?? 0;
  const [isTooltipOpen, setTooltipOpen] = useState(false);
  const currentSpell = spells[skill.ranks[Math.max(0, points - 1)]];
  const nextSpell = spells[skill.ranks[points]];

  function showTooltip() {
    setTooltipOpen(true);
  }

  function hideTooltip() {
    setTooltipOpen(false);
  }

  const getTalentStatus = useCallback(() => {
    const pointsInSpec = getSpecPoints(context.state, skill.specId) ?? 0;

    if (pointsInSpec >= skill.row * 5) {
      return "active";
    }

    if (!nextSpell) {
      return "done";
    }

    return "inactive";
  }, [nextSpell, skill.row, skill.specId, context.state]);

  const state = getTalentStatus();

  return (
    <Popover
      isOpen={isTooltipOpen}
      positions={["top", "right", "left", "bottom"]}
      align="start"
      content={
        <TalentPopover current={currentSpell} next={nextSpell} talent={skill} />
      }
    >
      <div
        className={`skill ${state}`}
        onClick={onTalentLeftClick(context, skill, state, navigate)}
        onContextMenu={onTalentRightClick(context, skill)}
        onMouseEnter={showTooltip}
        onMouseLeave={hideTooltip}
      >
        <img src={`talents/${skill.icon}.jpg`} alt={skill.icon} />
        <div className="badge flex justify-between items-center">
          {points}/{skill.ranks.length}
        </div>
        {skill.requires.map(({id}, i) => (
          <Arrow
            key={`arrow_${id}_${i}`}
            to={skill}
            from={talentsBySpecs[skill.specId][id]}
            isActive={isActive(talentsBySpecs[skill.specId][id], context.state)}
          />
        ))}
      </div>
    </Popover>
  );
}

function isActive(from, state) {
  return state.points[from.id] === from.ranks.length;
}

function onTalentLeftClick(context, skill, state, navigate) {
  return () => {
    if (!canAddPoint(context.state, skill) || state !== "active") {
      return;
    }

    context.dispatch({
      type: actions.SET_POINT,
      payload: skill,
    });
  };
}

function onTalentRightClick(context, skill) {
  return (e) => {
    e.preventDefault();

    context.dispatch({
      type: actions.UNSET_POINT,
      payload: skill,
    });
  };
}

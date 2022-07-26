import React, {useContext, useState} from "react";
import {observer} from "mobx-react-lite";

import Arrow from "../Spec/Arrow";
import {Popover} from "react-tiny-popover";
import TalentPopover from "./TalentPopover";
import {WowCalculatorContext} from "../store";
import {spells} from "../store/data/spells";
import {talentsBySpecs} from "../store/data/talents";

function Talent({skill}) {
  const context = useContext(WowCalculatorContext);

  const points = context.getTalentPoints(skill) ?? 0;
  const [isTooltipOpen, setTooltipOpen] = useState(false);
  const currentSpell = spells[skill.ranks[Math.max(0, points - 1)]];
  const nextSpell = spells[skill.ranks[points]];

  function showTooltip() {
    setTooltipOpen(true);
  }

  function hideTooltip() {
    setTooltipOpen(false);
  }

  const getTalentStatus = () => {
    const pointsInSpec = context.getSpecPoints(skill.specId) ?? 0;

    if (!nextSpell) {
      return "done";
    }

    if (pointsInSpec >= skill.row * 5) {
      return "active";
    }

    return "inactive";
  };
  const state = getTalentStatus();

  return (
    <>
      <Popover
        isOpen={isTooltipOpen}
        positions={["top", "right", "left", "bottom"]}
        align="start"
        content={
          <TalentPopover
            current={currentSpell}
            next={nextSpell}
            talent={skill}
          />
        }
      >
        <div
          className={`skill ${state}`}
          onClick={onTalentLeftClick(context, skill, state)}
          onContextMenu={onTalentRightClick(context, skill)}
          onMouseEnter={showTooltip}
          onMouseLeave={hideTooltip}
        >
          <img src={`talents/${skill.icon}.jpg`} alt={skill.icon} />
          <div className="badge flex justify-between items-center">
            {points}/{skill.ranks.length}
          </div>
        </div>
      </Popover>
      {skill.requires.map(({id}, i) => (
        <Arrow
          key={`arrow_${id}_${i}`}
          to={skill}
          from={talentsBySpecs[skill.specId][id]}
          isActive={isActive(talentsBySpecs[skill.specId][id], context.state)}
        />
      ))}
    </>
  );
}

export default observer(Talent);

function isActive(from, state) {
  return true;
}

function onTalentLeftClick(context, skill, state) {
  return () => {
    if (!context.canLearnTalent(skill) || state !== "active") {
      return;
    }

    context.setPoint(skill);
  };
}

function onTalentRightClick(context, skill) {
  return (e) => {
    e.preventDefault();

    context.unsetPoint(skill);
  };
}

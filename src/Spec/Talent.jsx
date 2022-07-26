import React, {useContext, useState} from "react";
import {observer} from "mobx-react-lite";

import Arrow from "../Spec/Arrow";
import {Popover} from "react-tiny-popover";
import TalentPopover from "./TalentPopover";
import {WowCalculatorContext} from "../store";
import {spells} from "../store/data/spells";
import {talentsBySpecs} from "../store/data/talents";
import {useNavigate} from "react-router-dom";

function Talent({skill}) {
  const context = useContext(WowCalculatorContext);
  const navigate = useNavigate();

  const points = context.getTalentPoints(skill) ?? 0;
  const [isTooltipOpen, setTooltipOpen] = useState(false);
  const currentSpell = spells[724];
  const nextSpell = spells[724];

  function showTooltip() {
    setTooltipOpen(true);
  }

  function hideTooltip() {
    setTooltipOpen(false);
  }

  const state = "active";

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

export default observer(Talent);

function isActive(from, state) {
  return true;
}

function onTalentLeftClick(context, skill, state, navigate) {
  return () => {
    // if (!canAddPoint(context.state, skill) || state !== "active") {
    //   return;
    // }

    context.setPoint(skill);
  };
}

function onTalentRightClick(context, skill) {
  return (e) => {
    e.preventDefault();

    context.unsetPoint(skill);
  };
}

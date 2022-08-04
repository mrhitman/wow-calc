import React, {useContext, useState} from "react";

import Arrow from "../Spec/Arrow";
import {Popover} from "react-tiny-popover";
import TalentPopover from "./TalentPopover";
import {WowCalculatorContext} from "../store";
import {observer} from "mobx-react-lite";
import {spells} from "../store/data/spells";
import {talentsBySpecs} from "../store/data/talents";

function Talent({skill}) {
  const context = useContext(WowCalculatorContext);

  const points = context.getTalentPoints(skill) ?? 0;
  const [isTooltipOpen, setTooltipOpen] = useState(false);
  const currentSpell = spells[skill.ranks[points - 1]];
  const nextSpell = spells[skill.ranks[points]];

  function showTooltip() {
    setTooltipOpen(true);
  }

  function hideTooltip() {
    setTooltipOpen(false);
  }

  const getTalentStatus = () => {
    const pointsInSpec = context.getSpecPoints(skill.specId) ?? 0;
    const talentPoints = context.getTalentPoints(skill);

    if (talentPoints === 0 && context.availablePointCount === 0) {
      return "inactive";
    }

    for (const requires of skill.requires) {
      const from = talentsBySpecs[skill.specId][requires.id];
      if (context.getTalentPoints(from) !== requires.qty) {
        return "inactive";
      }
    }

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
    <div className={`skill ${state}`}>
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
          className="wrap-img"
          onClick={onTalentLeftClick(context, skill, state)}
          onContextMenu={onTalentRightClick(context, skill)}
          onMouseEnter={showTooltip}
          onMouseLeave={hideTooltip}
        >
          <img src={`images/talents/${skill.icon}.jpg`} alt={skill.icon} />
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
          isActive={isActive(talentsBySpecs[skill.specId][id], skill, context)}
        />
      ))}
    </div>
  );
}

export default observer(Talent);

function isActive(from, to, state) {
  const specIndex = state.specIds.indexOf(from.specId);

  return (
    state.talentsBySpecs[specIndex][from.id] === from.ranks.length &&
    state.getSpecPoints(from.specId) >= to.row * 5
  );
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
    const relatedTalent = Object.values(talentsBySpecs[skill.specId]).find(
      (t) => t.requires.some((r) => r.id === skill.id)
    );

    if (relatedTalent && context.getTalentPoints(relatedTalent) > 0) {
      return;
    }

    context.unsetPoint(skill);
  };
}

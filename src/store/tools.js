import { classes } from "./data/classes";
import { talentsBySpecs } from "./data/talents";
import times from "lodash/times";

export function getSpecPoints(state, specId) {
  return Object
    .keys(state.points)
    .reduce((acc, talentId) =>
      !!getTalent(specId, talentId)
        ? acc + state.points[talentId]
        : acc, 0);
}

export function getTalent(specId, talentId) {
  return talentsBySpecs[specId][talentId];
}

export function dehydrateTalentString(state) {
  const { specs } = getClassById(state.classId);

  return specs
    .map((specId) => dehydrateTalentStringForSpec(state, specId))
    .join("-");
}

export function dehydrateGlyphString(state) {
  return times(6, n => state.glyphs[n]?.spellId ?? '_').join(',');
}

export function dehydrateTalentStringForSpec(state, specId) {
  const specTalendIds = Object.keys(talentsBySpecs[specId])
    .map(Number)
    .sort((a, b) => a - b);

  return specTalendIds
    .map((id) => state.points[id] ?? 0)
    .join("");
}

export function hydrateTalentString(str, classId) {
  const points = {};

  if (!str) {
    return points;
  }

  const talentStringForSpecs = str.split('-');
  const classInfo = getClassById(classId);

  for (let i = 0; i < talentStringForSpecs.length; i++) {
    const talentStringForSpec = talentStringForSpecs[i];
    const specId = classInfo.specs[i];
    const specTalendIds = Object.keys(talentsBySpecs[specId])
      .map(Number)
      .sort((a, b) => a - b);

    for (let j = 0; j < specTalendIds.length; j++) {
      if (talentStringForSpec[j] !== '0') {
        points[specTalendIds[j]] = +(talentStringForSpec[j] ?? 0);
      }
    }
  }

  return points;
};

export function getClassByName(name) {
  return classes.find(classInfo => classInfo.name.toLowerCase() === name.toLowerCase())
}

export function getClassById(id) {
  return classes.find(classInfo => classInfo.id === +id);
}

export function getArrowDirection(from, to) {
  if (to.row > from.row && to.col === from.col) {
    return "down";
  }

  if (to.row === from.row && to.col > from.col) {
    return "right";
  }

  if (to.row === from.row && to.col < from.col) {
    return "left";
  }

  if (to.row > from.row && to.col === from.col + 1) {
    return "right-down";
  }

  if (to.row > from.row && to.col === from.col - 1) {
    return "left-down";
  }
}
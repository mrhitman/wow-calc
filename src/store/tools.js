import { classes } from "./data/classes";
import { talentsBySpecs } from "./data/talents";

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

export function getAvailablePoints(state, maxPoints = 80) {
  return maxPoints - Object.values(state.points).reduce((acc, v) => acc + v, 0);
}

export function canAddPoint(state, skill, maxPoints = 80) {
  const points = state.points[skill.id] ?? 0;

  return getAvailablePoints(state, maxPoints) > 0
    && points < skill.ranks.length
    && skill.requires.every(r => state.points[r.id] >= r.qty);
}

export function findClassByName(name) {
  return classes.find(classInfo => classInfo.name.toLowerCase() === name.toLowerCase())
}
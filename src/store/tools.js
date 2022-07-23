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

export function hydrateTalentString(context, skill) {
  const { specs } = findClassById(context.state.classId);

  return specs
    .map((specId) => hydrateTalentStringForSpec(context, specId, skill))
    .join("-");
}

export function hydrateTalentStringForSpec(context, specId, skill) {
  const specTalendIds = Object.keys(talentsBySpecs[specId])
    .map(Number)
    .sort((a, b) => a - b);

  return specTalendIds
    .map((id) => {
      let points = context.state.points[id];

      if (skill && id === skill.id) {
        return points ? points + 1 : 1;
      }

      return points ?? 0;
    })
    .join("");
}

export function dehydrateTalentString(str, classId) {
  const points = {};

  if (!str) {
    return points;
  }

  const talentStringForSpecs = str.split('-');
  const classInfo = findClassById(classId);

  for (let i = 0; i < talentStringForSpecs.length; i++) {
    const talentStringForSpec = talentStringForSpecs[i];
    const specId = classInfo.specs[i];
    const specTalendIds = Object.keys(talentsBySpecs[specId])
      .map(Number)
      .sort((a, b) => a - b);

    for (let j = 0; j < specTalendIds.length; j++) {
      if (talentStringForSpec[j] !== '0') {
        points[specTalendIds[j]] = +talentStringForSpec[j];
      }
    }
  }

  return points;
};

export function findClassByName(name) {
  return classes.find(classInfo => classInfo.name.toLowerCase() === name.toLowerCase())
}

export function findClassById(id) {
  return classes.find(classInfo => classInfo.id === +id);
}
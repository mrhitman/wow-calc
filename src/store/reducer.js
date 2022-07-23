import { actions } from "./actions";
import { hydrateTalentString } from "./tools";
import { talentsBySpecs } from "./data/talents";

export function reducer(state, action) {
  switch (action.type) {
    case actions.ADD_POINT:
      return addPoint(state, action.payload);
    case actions.REMOVE_POINT:
      return removePoint(state, action.payload);
    case actions.RESET_SPEC:
      return resetSpec(state, action.payload);
    case actions.SELECT_HERO:
      return selectHero(state, action.payload);
    default:
      return state;
  }
}

export function addPoint(state, talent) {
  return {
    ...state,
    points: {
      ...state.points,
      [talent.id]: (state.points[talent.id] ?? 0) + 1
    },
  };
}

export function removePoint(state, talent) {
  return {
    ...state,
    points: {
      ...state.points,
      [talent.id]: Math.max(0, (state.points[talent.id] ?? 0) - 1),
    },
  };
}

export function resetSpec(state, specId) {
  const specTalentIds = Object.keys(talentsBySpecs[specId]);

  return {
    ...state,
    points: Object
      .keys(state.points)
      .reduce(
        (acc, id) => !specTalentIds.includes(id) ? { ...acc, [id]: state.points[id] } : acc,
        {}
      ),
  };
}

export function selectHero(state, { id, talentsString }) {
  return {
    ...state,
    points: hydrateTalentString(talentsString, id),
    classId: id,
  };
}

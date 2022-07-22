import { actions } from "./actions";
import { talentsBySpecs } from "./data/talents";

export function reducer(state, action) {
  if (process.env.NODE_ENV === 'development') {
    global.console.log({ action, state });
  }

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

export function addPoint(state, payload) {
  return { ...state, points: { ...state.points, [payload.id]: (state.points[payload.id] ?? 0) + 1 } };
}

export function removePoint(state, payload) {
  return {
    ...state,
    points: {
      ...state.points,
      [payload.id]: Math.max(0, (state.points[payload.id] ?? 0) - 1),
    },
  };
}

export function resetSpec(state, payload) {
  debugger
  const specTalentIds = Object.keys(talentsBySpecs[payload]);

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

export function selectHero(state, payload) {
  return { ...state, points: {}, selectedHero: payload };
}

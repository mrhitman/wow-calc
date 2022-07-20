import { actions } from "./actions";

export function reducer(state, action) {
  global.console.log(action, state);

  switch (action.type) {
    case actions.ADD_POINT:
      return addPoint(state, action.payload);
    case actions.REMOVE_POINT:
      return removePoint(state, action.payload);
    case actions.RESET_SPEC:
      return resetSpec(state);
    case actions.SELECT_HERO:
      return selectHero(state, state.payload);
    default:
      return state;
  }
}

export function addPoint(state, payload) {
  return { ...state, points: [...state.points, payload] };
}

export function removePoint(state, payload) {
  return { ...state, points: state.points.filter(p => p !== payload) };
}

export function resetSpec(state) {
  return { ...state, points: [] };
}

export function selectHero(state, payload) {
  return { ...resetSpec(state), selectedHero: payload };
}

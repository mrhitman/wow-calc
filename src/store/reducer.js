import { actions } from "./actions";

export function reducer(state, action) {
  global.console.log(action);

  switch (action.type) {
    case actions.ADD_POINT:
      return state;
    case actions.UNSET_POINT:
      return state;
    case actions.RESET_SPEC:
      return state;
    case actions.SELECT_HERO:
      return { ...state, selectedHero: action.payload };
    default:
      return state;
  }
}
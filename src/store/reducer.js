export function reducer(state, dispatched) {

  switch (dispatched.action) {
    case "ADD_POINT":
      global.console.log(dispatched);
      return state;
    case "UNSET_POINT":
      return state;
    case "RESET_SPEC":
      return state;
    case "SELECT_HERO":
      return state;
    default:
      return state;
  }
}
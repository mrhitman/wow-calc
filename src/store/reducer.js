import { actions } from "./actions";
import { hydrateTalentString } from "./tools";
import { talentsBySpecs } from "./data/talents";

export function reducer(state, action) {
  switch (action.type) {
    case actions.SET_POINT:
      return setPoint(state, action.payload);
    case actions.UNSET_POINT:
      return unsetPoint(state, action.payload);
    case actions.RESET_SPEC:
      return resetSpec(state, action.payload);
    case actions.RESET_ALL:
      return resetAll(state);
    case actions.SET_GLYPH:
      return setGlyph(state, action.payload);
    case actions.SELECT_HERO:
      return selectHero(state, action.payload);
    default:
      return state;
  }
}

export function setPoint(state, talent) {
  return {
    ...state,
    points: {
      ...state.points,
      [talent.id]: (state.points[talent.id] ?? 0) + 1
    },
  };
}

export function unsetPoint(state, talent) {
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

export function setGlyph(state, { glyph, index }) {
  return {
    ...state,
    glyphs: { ...state.glyphs, [index]: glyph },
  }
}

export function resetAll(state) {
  return {
    ...state,
    points: {},
    glyphs: {},
  }
}

export function selectHero(state, { id, talentsString }) {
  return {
    ...state,
    points: hydrateTalentString(talentsString, id),
    classId: id,
    glyphs: {},
  };
}

import { WowCalculatorContext, getInitialState } from "./index";
import { dehydrateTalentString, findClassByName, getAvailablePoints } from "./tools";
import { useContext, useEffect, useReducer } from "react";

import { actions } from "./actions";
import { reducer } from './reducer';
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useSearchParams } from "react-router-dom";

export function useState() {
  return useReducer(reducer, getInitialState());
}

export function useDehydrateTalentString() {
  const navigate = useNavigate();
  const { state } = useContext(WowCalculatorContext);

  useEffect(() => {
    if (state.classId) {
      navigate(`.?t=${dehydrateTalentString(state)}`, {
        replace: true,
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state]);
}

export function useHydrateTalentString() {
  const { state, dispatch } = useContext(WowCalculatorContext);
  const { className: name } = useParams();
  const [params] = useSearchParams();
  const talentsString = params.get("t");
  const classInfo = findClassByName(name);

  useEffect(() => {
    if (state.classId !== classInfo.id) {
      dispatch({
        type: actions.SELECT_HERO,
        payload: { id: classInfo.id, talentsString },
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state.classId, talentsString]);

  const availablePointCount = getAvailablePoints(state);
  return [classInfo, availablePointCount];
}
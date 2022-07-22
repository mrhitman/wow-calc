import React, {useContext, useEffect} from "react";
import {findClassByName, getAvailablePoints} from "../store/tools";

import ClassBanner from "../ClassBanner/ClassBanner";
import ClassPicker from "../ClassPicker/ClassPicker";
import Spec from "../Spec/Spec";
import {WowCalculatorContext} from "../store";
import {actions} from "../store/actions";
import {useParams} from "react-router-dom";

function ClassSpecs() {
  const {state, dispatch} = useContext(WowCalculatorContext);
  const {className: name} = useParams();
  const classInfo = findClassByName(name);

  useEffect(() => {
    if (state.selectedHero !== name) {
      dispatch({type: actions.SELECT_HERO, dispatch: name});
    }
  }, [name, dispatch, state.selectedHero]);

  return (
    <>
      <ClassBanner />
      <ClassPicker />
      <div>
        <div>{getAvailablePoints(state)}</div>
        <div className="tree">
          {classInfo.specs.map((specId) => (
            <Spec key={specId} specId={specId} />
          ))}
        </div>
      </div>
    </>
  );
}

export default ClassSpecs;

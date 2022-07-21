import React, {useContext, useEffect} from "react";
import {findClassByName, getAvailablePoints} from "../store/tools";

import Spec from "../Spec/Spec";
import {WowCalculatorContext} from "../store";
import {actions} from "../store/actions";
import {useParams} from "react-router-dom";

function ClassSpecs() {
  const {state, dispatch} = useContext(WowCalculatorContext);
  const {className: name} = useParams();
  const classInfo = findClassByName(name);

  useEffect(() => {
    dispatch({type: actions.SELECT_HERO, dispatch: name});
  }, [name, dispatch]);

  return (
    <div>
      <div>{getAvailablePoints(state)}</div>
      <div className="tree">
        {classInfo.specs.map((specId) => (
          <Spec key={specId} specId={specId} />
        ))}
      </div>
    </div>
  );
}

export default ClassSpecs;

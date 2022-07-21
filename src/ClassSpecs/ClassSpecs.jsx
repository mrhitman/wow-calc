import React, {useContext, useEffect} from "react";

import Spec from "../Spec/Spec";
import {WowCalculatorContext} from "../store";
import {actions} from "../store/actions";
import {getAvailablePoints} from "../store/tools";
import {useParams} from "react-router-dom";

function ClassSpecs() {
  const {state, dispatch} = useContext(WowCalculatorContext);
  const {className} = useParams();

  useEffect(() => {
    dispatch({type: actions.SELECT_HERO, dispatch: className});
  }, [className, dispatch]);

  return (
    <div>
      <div>{getAvailablePoints(state)}</div>
      <div className="tree">
        <Spec specId={161} />
        <Spec specId={164} />
        <Spec specId={163} />
      </div>
    </div>
  );
}

export default ClassSpecs;

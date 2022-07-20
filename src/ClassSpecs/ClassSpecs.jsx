import React, {useContext, useEffect} from "react";
import {useParams} from "react-router-dom";
import Spec from "../Spec/Spec";
import {WowCalculatorContext} from "../store";
import {actions} from "../store/actions";
import {getAvailablePoints} from "../store/tools";

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
        <Spec />
        <Spec />
        <Spec />
      </div>
    </div>
  );
}

export default ClassSpecs;

import React, {useContext, useEffect} from "react";
import {useParams} from "react-router-dom";
import Spec from "../Spec/Spec";
import {WowCalculatorContext} from "../store";
import {actions} from "../store/actions";

function ClassSpecs() {
  const {dispatch} = useContext(WowCalculatorContext);
  const {className} = useParams();

  useEffect(() => {
    dispatch({type: actions.SELECT_HERO, dispatch: className});
  }, [className, dispatch]);

  return (
    <div className="tree">
      <Spec />
      <Spec />
      <Spec />
    </div>
  );
}

export default ClassSpecs;

import "./Spec.scss";

import React, {useContext} from "react";
import {specNames, talentsBySpecs} from "../store/data/talents";

import SpecRow from "./SpecRow";
import {WowCalculatorContext} from "../store";
import {actions} from "../store/actions";
import {getSpecPoints} from "../store/tools";
import groupBy from "lodash/groupBy";

function Spec({specId}) {
  const context = useContext(WowCalculatorContext);
  const spec = Object.values(talentsBySpecs[specId]);

  return (
    <div className="spec-wrapper">
      <div className="spec-header">
        <div className="spec-icon">
          <img src="" alt="" />
        </div>
        <div className="spec-name">{specNames[specId]}</div>
        <div className="spec-points">{getSpecPoints(context.state, spec)}</div>
        <div className="spec-reset" onClick={onSpecResetClick(context)}>
          <img src="" alt="" />
        </div>
      </div>
      <div className="spec">
        {Object.values(groupBy(spec, "row")).map((row, key) => (
          <SpecRow key={key} row={row} />
        ))}
      </div>
    </div>
  );
}

function onSpecResetClick(context) {
  return () => {
    context.dispatch({type: actions.RESET_SPEC});
  };
}

export default Spec;

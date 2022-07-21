import "./Spec.scss";

import React, {useContext} from "react";

import SpecRow from "./SpecRow";
import {WowCalculatorContext} from "../store";
import {actions} from "../store/actions";
import {getSpecPoints} from "../store/tools";
import groupBy from "lodash/groupBy";
import map from "lodash/map";
import {talentsBySpecs} from "../store/data/talents";

function Spec({specId}) {
  const context = useContext(WowCalculatorContext);
  const _spec = Object.values(talentsBySpecs[specId]);

  return (
    <div className="spec-wrapper">
      <div className="spec-header">
        <div className="spec-icon">
          <img src="" alt="" />
        </div>
        <div className="spec-name">Balance</div>
        <div className="spec-points">{getSpecPoints(context.state, _spec)}</div>
        <div className="spec-reset" onClick={onSpecResetClick(context)}>
          <img src="" alt="" />
        </div>
      </div>
      <div className="spec">
        {map(groupBy(_spec, "row"), (row, key) => (
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

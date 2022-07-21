import "./Spec.scss";

import React, {useContext} from "react";

import SpecRow from "./SpecRow";
import {WowCalculatorContext} from "../store";
import {actions} from "../store/actions";
import {getSpecPoints} from "../store/tools";
import groupBy from "lodash/groupBy";
import map from "lodash/map";

const spec = [
  {id: 1, name: "foo", row: 0, col: 1, maxPoints: 5},
  {id: 2, name: "bar", row: 0, col: 2, maxPoints: 5},
  {id: 3, name: "bar", row: 1, col: 0, maxPoints: 4},
  {id: 4, name: "bar", row: 1, col: 2, maxPoints: 3},
  {id: 5, name: "bar", row: 1, col: 3, maxPoints: 5},
  {id: 6, name: "bar", row: 2, col: 0, maxPoints: 5},
  {id: 7, name: "bar", row: 2, col: 1, maxPoints: 2},
  {id: 8, name: "bar", row: 2, col: 2, maxPoints: 5},
  {id: 9, name: "bar", row: 2, col: 3, maxPoints: 5},
  {id: 10, name: "bar", row: 3, col: 1, maxPoints: 3},
  {id: 11, name: "bar", row: 3, col: 2, maxPoints: 5},
  {id: 12, name: "bar", row: 3, col: 3, maxPoints: 5},
  {id: 13, name: "bar", row: 4, col: 0, maxPoints: 1},
  {id: 14, name: "bar", row: 4, col: 1, maxPoints: 5},
  {id: 15, name: "bar", row: 4, col: 3, maxPoints: 3},
  {id: 16, name: "bar", row: 5, col: 1, maxPoints: 5},
  {id: 17, name: "bar", row: 5, col: 2, maxPoints: 2},
  {id: 18, name: "bar", row: 6, col: 1, maxPoints: 5},
  {id: 19, name: "bar", row: 6, col: 2, maxPoints: 5},
  {id: 20, name: "bar", row: 7, col: 1, maxPoints: 5},
  {id: 21, name: "bar", row: 7, col: 2, maxPoints: 3},
  {id: 22, name: "bar", row: 8, col: 1, maxPoints: 5},
  {id: 23, name: "bar", row: 8, col: 2, maxPoints: 5},
  {id: 24, name: "bar", row: 9, col: 1, maxPoints: 4},
  {id: 25, name: "bar", row: 9, col: 2, maxPoints: 5},
  {id: 26, name: "bar", row: 10, col: 2, maxPoints: 1},
];

function Spec() {
  const context = useContext(WowCalculatorContext);

  return (
    <div className="spec-wrapper">
      <div className="spec-header">
        <div className="spec-icon">
          <img src="" alt="" />
        </div>
        <div className="spec-name">Balance</div>
        <div className="spec-points">{getSpecPoints(context.state, spec)}</div>
        <div className="spec-reset" onClick={onSpecResetClick(context)}>
          <img src="" alt="" />
        </div>
      </div>
      <div className="spec">
        {map(groupBy(spec, "row"), (row, key) => (
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

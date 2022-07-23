import "./Spec.scss";

import React, {useContext} from "react";
import {getSpecPoints, hydrateTalentString} from "../store/tools";
import {specNames, talentsBySpecs} from "../store/data/talents";

import SpecRow from "./SpecRow";
import {WowCalculatorContext} from "../store";
import {actions} from "../store/actions";
import groupBy from "lodash/groupBy";
import {useNavigate} from "react-router-dom";

function Spec({specId}) {
  const context = useContext(WowCalculatorContext);
  const spec = Object.values(talentsBySpecs[specId]);
  const navigate = useNavigate();

  return (
    <div className="spec-wrapper">
      <div className="spec-header">
        <div className="flex items-center">
          <div className="spec-icon">
            <img src="" alt="" />
          </div>
          <div className="spec-name">{specNames[specId]}</div>
        </div>
        <div className="flex items-center">
          <div className="spec-points">
            {getSpecPoints(context.state, specId)}
          </div>
          <div
            className="spec-reset"
            onClick={onSpecResetClick(context, specId, navigate)}
          ></div>
          <img src="" alt="" />
        </div>
      </div>
      <div
        className="spec"
        style={{backgroundImage: `url(specs/${specId}.jpg)`}}
      >
        {Object.values(groupBy(spec, "row")).map((row, key) => (
          <SpecRow key={key} row={row} spec={spec} />
        ))}
      </div>
    </div>
  );
}

function onSpecResetClick(context, specId, navigate) {
  return () => {
    context.dispatch({type: actions.RESET_SPEC, payload: specId});

    // @TODO check hydration
    navigate(`.?t=${hydrateTalentString(context)}`, {
      replace: true,
    });
  };
}

export default Spec;

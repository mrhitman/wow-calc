import "./Spec.scss";

import React, {useContext} from "react";
import {specNames, talentsBySpecs} from "../store/data/talents";

import SpecHeader from "./SpecHeader";
import SpecRow from "./SpecRow";
import {WowCalculatorContext} from "../store";
import groupBy from "lodash/groupBy";
import {observer} from "mobx-react-lite";

function Spec({specId}) {
  const context = useContext(WowCalculatorContext);

  if (!context.isActive) {
    return null;
  }

  const spec = Object.values(talentsBySpecs[specId]);

  return (
    <div className="spec-wrapper">
      <SpecHeader
        leading={<img src={`specs/${specId}_icon.jpg`} alt="" />}
        title={specNames[specId]}
        trailing={context.getSpecPoints(specId)}
        onClick={onSpecResetClick(context, specId)}
      />
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

function onSpecResetClick(context, specId) {
  return () => context.resetSpec(specId);
}

export default observer(Spec);

import "./Spec.scss";

import {observer} from "mobx-react-lite";
import React, {useContext} from "react";
import {specNames, talentsBySpecs} from "../store/data/talents";

import SpecHeader from "./SpecHeader";
import SpecRow from "./SpecRow";
import {WowCalculatorContext} from "../store";
import groupBy from "lodash/groupBy";
// import {useDehydrateTalentString} from "../store/hooks";

function Spec({specId}) {
  // useDehydrateTalentString();

  const context = useContext(WowCalculatorContext);

  if (!context.isActive) {
    return null;
  }

  const classInfo = context.classInfo;
  const spec = Object.values(talentsBySpecs[specId]);

  return (
    <div className="spec-wrapper">
      <SpecHeader
        leading={
          <img
            src={`https://wotlk.evowow.com/static/images/wow/talents/trees/${classInfo.name.toLowerCase()}_${
              classInfo.specs.indexOf(specId) + 1
            }.gif`}
            alt=""
          />
        }
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

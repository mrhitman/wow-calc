import React from "react";
import Talent from "./Spec/Talent";
import {talentsBySpecs} from "./store/data/talents";

function Test() {
  return (
    <div style={{display: "flex"}}>
      <div>
        <Talent skill={talentsBySpecs[161][135]} />
      </div>
      <div>
        <Talent skill={talentsBySpecs[161][1824]} />
      </div>
    </div>
  );
}

export default Test;

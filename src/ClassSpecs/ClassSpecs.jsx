import React, {useContext} from "react";

import ClassPicker from "../ClassPicker/ClassPicker";
import GlyphsModal from "../Glyphs/GlyphsModal";
import Spec from "../Spec/Spec";
import SpecHeader from "../Spec/SpecHeader";
import {WowCalculatorContext} from "../store";
import {actions} from "../store/actions";
import {useHydrateTalentString} from "../store/hooks";

function ClassSpecs() {
  const context = useContext(WowCalculatorContext);
  const [classInfo, availablePointCount] = useHydrateTalentString();

  return (
    <>
      <ClassPicker />
      <h3 className="sub-title">Priest WotLK Classic<br /> Talent Calculator</h3>
      <div>
        <div>{availablePointCount}</div>
        <div className="flex justify-between">
          <div className="tree">
            {classInfo.specs.map((specId) => (
              <Spec key={specId} specId={specId} />
            ))}
          </div>
          <div className="flex justify-between direction-column">
            <SpecHeader title="Glyphs" onClick={() => context.dispatch({ type: actions.RESET_GLYPHS })} />
            <div
              className="glyphs"            >
              <div className="glyphs-big">
                <GlyphsModal index={0} />
                <GlyphsModal index={1} />
                <GlyphsModal index={2} />
              </div>
              <div className="glyphs-small">
                <GlyphsModal index={3} small />
                <GlyphsModal index={4} small />
                <GlyphsModal index={5} small />
              </div>
            </div>
            <div>
              <div onClick={() => context.dispatch({type: actions.RESET_ALL})}>
                reset all
              </div>
              <div
                onClick={() => {
                  navigator.clipboard.writeText(window.location.href);
                }}
              >
                copy link
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ClassSpecs;

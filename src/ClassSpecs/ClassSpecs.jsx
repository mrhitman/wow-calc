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
      <h3 className="sub-title">
        Priest WotLK Classic
        <br /> Talent Calculator
      </h3>
      <div>
        <div>{availablePointCount}</div>
        <div className="flex justify-between">
          <div className="tree flex justify-between flex-wrap">
            {classInfo.specs.map((specId) => (
              <Spec key={specId} specId={specId} />
            ))}
            <div className="glyphs-wrap flex justify-between direction-column">
              <div className="content-glyphs">
                <SpecHeader
                  title="Glyphs"
                  onClick={() => context.dispatch({type: actions.RESET_GLYPHS})}
                />
                <div className="glyphs">
                  <span className="type-g">Major</span>
                  <div className="glyphs-big">
                    <GlyphsModal index={0} />
                    <GlyphsModal index={1} />
                    <GlyphsModal index={2} />
                  </div>
                  <span className="type-g">Minor</span>
                  <div className="glyphs-small">
                    <GlyphsModal index={3} small />
                    <GlyphsModal index={4} small />
                    <GlyphsModal index={5} small />
                  </div>
                </div>
              </div>
              <div className="btn-group">
                <button
                  className="btn-clear"
                  onClick={() => context.dispatch({type: actions.RESET_ALL})}
                >
                  <img src="" alt="" />
                  reset all
                </button>
                <button
                  className="btn-copy"
                  onClick={() => {
                    navigator.clipboard.writeText(window.location.href);
                  }}
                >
                  <img src="" alt="" />
                  copy link
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ClassSpecs;

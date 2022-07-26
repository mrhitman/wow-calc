import React, {useContext} from "react";
import {useParams} from "react-router-dom";
import {observer} from "mobx-react-lite";

import ClassPicker from "../ClassPicker/ClassPicker";
import GlyphsModal from "../Glyphs/GlyphsModal";
import Spec from "../Spec/Spec";
import SpecHeader from "../Spec/SpecHeader";
import {WowCalculatorContext} from "../store";
// import {useHydrateString} from "../store/hooks";

function ClassSpecs() {
  const context = useContext(WowCalculatorContext);
  const {className} = useParams();
  context.setActiveClassByName(className);

  if (!context.isActive) {
    return null;
  }

  return (
    <>
      <ClassPicker />
      <h3 className="sub-title">
        Priest WotLK Classic
        <br /> Talent Calculator
      </h3>
      <div>
        <div>{context.availablePointCount}</div>
        <div className="flex justify-between">
          <div className="tree flex justify-between flex-wrap">
            {context.classInfo.specs.map((specId) => (
              <Spec key={specId} specId={specId} />
            ))}
            <div className="glyphs-wrap flex justify-between direction-column">
              <div className="content-glyphs">
                <SpecHeader title="Glyphs" onClick={context.resetGlyphs} />
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
                <button className="btn-clear" onClick={context.resetAll}>
                  <img src="../images/icon-svg/delete.svg" alt="" />
                  reset all
                </button>
                <button
                  className="btn-copy"
                  onClick={() => {
                    navigator.clipboard.writeText(window.location.href);
                  }}
                >
                  <img src="/icon-svg/link.svg" alt="" />
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

export default observer(ClassSpecs);

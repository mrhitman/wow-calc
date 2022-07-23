import React, {useContext} from "react";

import ClassBanner from "../ClassBanner/ClassBanner";
import ClassPicker from "../ClassPicker/ClassPicker";
import GlyphsModal from "../Glyphs/GlyphsModal";
import Spec from "../Spec/Spec";
import {WowCalculatorContext} from "../store";
import {actions} from "../store/actions";
import {useHydrateTalentString} from "../store/hooks";

function ClassSpecs() {
  const context = useContext(WowCalculatorContext);
  const [classInfo, availablePointCount] = useHydrateTalentString();

  return (
    <>
      <ClassBanner />
      <ClassPicker />
      <div>
        <div>{availablePointCount}</div>
        <div className="tree">
          {classInfo.specs.map((specId) => (
            <Spec key={specId} specId={specId} />
          ))}
        </div>
        <div className="glyphs">
          <div className="glyphs-big">
            <GlyphsModal />
            <GlyphsModal />
            <GlyphsModal />
          </div>
          <div className="glyphs-small">
            <GlyphsModal small />
            <GlyphsModal small />
            <GlyphsModal small />
          </div>
        </div>
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
    </>
  );
}

export default ClassSpecs;

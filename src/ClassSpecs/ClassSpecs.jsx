import React, {useContext, useEffect} from "react";
import {findClassByName, getAvailablePoints} from "../store/tools";
import {useParams, useSearchParams} from "react-router-dom";

import ClassPicker from "../ClassPicker/ClassPicker";
import GlyphsModal from "../Glyphs/GlyphsModal";
import Spec from "../Spec/Spec";
import {WowCalculatorContext} from "../store";
import {actions} from "../store/actions";

function ClassSpecs() {
  const {state, dispatch} = useContext(WowCalculatorContext);
  const {className: name} = useParams();
  const [params] = useSearchParams();
  const talentsString = params.get("t");
  const classInfo = findClassByName(name);

  useEffect(() => {
    if (state.classId !== classInfo.id) {
      dispatch({
        type: actions.SELECT_HERO,
        payload: {id: classInfo.id, talentsString},
      });
    }
  }, [dispatch, state.classId, classInfo.id, talentsString]);

  return (
    <>
      <ClassPicker />
      <div>
        <div>{getAvailablePoints(state)}</div>
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
      </div>
    </>
  );
}

export default ClassSpecs;

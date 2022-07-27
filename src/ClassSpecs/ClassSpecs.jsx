import React, {useContext, useEffect} from "react";

import ClassPicker from "../ClassPicker/ClassPicker";
import GlyphsModal from "../Glyphs/GlyphsModal";
import Spec from "../Spec/Spec";
import SpecHeader from "../Spec/SpecHeader";
import {WowCalculatorContext} from "../store";
import delete1 from "../images/icon-svg/delete.svg";
import link1 from "../images/icon-svg/link.svg";
import {observer} from "mobx-react-lite";
import {useNavigate} from "react-router-dom";
import {useParams} from "react-router-dom";
import {useSearchParams} from "react-router-dom";

function ClassSpecs() {
  const context = useContext(WowCalculatorContext);
  const {className} = useParams();
  const [params] = useSearchParams();
  const navigate = useNavigate();

  context.setActiveClassByName(className);
  useEffect(() => {
    const talentString = params.get("t");
    const glyphString = params.get("g");
    context.hydrate(talentString, glyphString);
    navigate(`?t=${context.talentString}&g=${context.glyphsString}`);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    navigate(`?t=${context.talentString}&g=${context.glyphsString}`);
  }, [context.talentString, context.glyphsString, navigate]);

  if (!context?.isActive) {
    return null;
  }

  return (
    <>
      <ClassPicker />
      <div className="title-wrap">
        <h3 className="sub-title">
          WotLK Priest Talent Calculator
        </h3>
        <button
          className="btn-copy"
          onClick={() => {
            navigator.clipboard.writeText(window.location.href);
          }}
        >
          <img className="icon" src={link1} alt="link" />
          copy link
        </button>
      </div>
      <div>
        {/* <div>{context.availablePointCount}</div> */}
        <div className="flex justify-between">
          <div className="tree flex flex-wrap">
            {context.classInfo.specs.map((specId) => (
              <Spec key={specId} specId={specId} />
            ))}
            <div className="glyphs-wrap flex direction-column">
              <div className="content-glyphs">
                <SpecHeader
                  title="Glyphs"
                  onClick={() => context.resetGlyphs()}
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
                  onClick={() => context.resetAll()}
                >
                  <img className="icon" src={delete1} alt="delete" />
                  reset all
                </button>
                {/* <button
                  className="btn-copy"
                  onClick={() => {
                    navigator.clipboard.writeText(window.location.href);
                  }}
                >
                  <img className="icon" src={link1} alt="link" />
                  copy link
                </button> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default observer(ClassSpecs);

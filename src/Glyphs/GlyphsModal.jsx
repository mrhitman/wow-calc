import "./GlyphsModal.scss";

import React, {useContext, useState} from "react";

import {Modal} from "react-tiny-modal";
import {WowCalculatorContext} from "../store";
import {actions} from "../store/actions";
import {classes} from "../store/data/classes";
import {glyphs} from "../store/data/glyphs";

function GlyphsModal({small, index}) {
  const [showModal, setShowModal] = useState(false);
  const context = useContext(WowCalculatorContext);

  if (!context.state.classId) {
    return;
  }

  const classInfo = classes.find((c) => c.id === context.state.classId);

  function onSelectGlyph(glyph) {
    context.dispatch({type: actions.SET_GLYPH, payload: {glyph, index}});
    setShowModal(false);
  }
  const glyph = context.state.glyphs[index];

  return (
    <>
      <div onClick={() => setShowModal(true)}>
        <div className="glyph-section flex items-center">
          {glyph ? (
            <>
            <div className="img-wrap">
              <img
                src={`https://wotlk.evowow.com/static/images/wow/icons/medium/${glyph.icon}.jpg`}
                alt=""
              />
            </div>
            <div>
              {glyph.name}
            </div>
            </>
          ) : (
            <div>
              <img
                src={``}
                alt=""
              />
              Empty
            </div>
          )}
        </div>
      </div>
      <Modal
        className="modal-wrap"
        isOpen={showModal}
        onClose={() => setShowModal(false)}
      >
        <div className="glyph-modal-content">
          <button
            className="spec-reset"
            onClick={() => setShowModal(false)}
          ></button>
          <div className="content">
            {glyphs
              .filter(
                (g) =>
                  g.classId === classInfo.id &&
                  g.glyphType === (small ? 2 : 1) &&
                  !Object.values(context.state.glyphs).includes(g)
              )
              .map((g, i) => (
                <div
                  className="list-item flex items-center"
                  key={`${g.id}_${i}`}
                  onClick={() => onSelectGlyph(g)}
                >
                  <img
                    className="modal-img"
                    src={`https://wotlk.evowow.com/static/images/wow/icons/small/${g.icon}.jpg`}
                    alt=""
                  />
                  {g.name}
                </div>
              ))}
          </div>
        </div>
      </Modal>
    </>
  );
}

export default GlyphsModal;

import "./GlyphsModal.scss";

import React, {useContext, useState} from "react";

import {Modal} from "react-tiny-modal";
import {WowCalculatorContext} from "../store";
import {glyphs} from "../store/data/glyphs";

function GlyphsModal({small, index}) {
  const [showModal, setShowModal] = useState(false);
  const context = useContext(WowCalculatorContext);

  if (!context.isActive) {
    return;
  }

  const classInfo = context.classInfo;

  function onSelectGlyph(glyph) {
    context.setGlyph(glyph, index);
    setShowModal(false);
  }

  const glyph = context.glyphs[index];

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
            <div className="name">
              {glyph.name}
            </div>
            </>
          ) : (
            <div className="flex items-center">
              <div className="wrapper-Img">
                <img
                  src={require("../images/image_glypht.png")}
                  alt=""
                />
              </div>
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

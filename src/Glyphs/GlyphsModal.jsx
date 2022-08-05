import "./GlyphsModal.scss";

import React, {useContext, useState} from "react";

import Modal from "react-modal";
import {WowCalculatorContext} from "../store";
import {glyphs} from "../store/data/glyphs";
import {observer} from "mobx-react-lite";

function GlyphsModal({index, small}) {
  const [showModal, setShowModal] = useState(false);
  const context = useContext(WowCalculatorContext);
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
                <img src={`images/glyphs/${glyph.icon}.jpg`} alt="" />
              </div>
              <div className="name">{glyph.name}</div>
            </>
          ) : (
            <div className="flex items-center">
              <div className="wrapper-Img">
                <img src="images/image_glypht.png" alt="" />
              </div>
              Empty
            </div>
          )}
        </div>
      </div>
      <Modal
        isOpen={showModal}
        style={{
          overlay: {
            background: "rgba(0, 0, 0, 0)",
          },
          content: {
            top: "50%",
            left: "50%",
            right: "auto",
            bottom: "auto",
            marginRight: "-50%",
            transform: "translate(-50%, -50%)",
            background: "rgba(0, 0, 0, 0)",
            border: "none",
            zIndex: 50,
          },
        }}
        ariaHideApp={false}
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
                  !context.isGlyphPicked(g) &&
                  g.glyphType === (small ? 2 : 1)
              )
              .map((g, i) => (
                <div
                  className="list-item flex items-center"
                  key={`${g.id}_${i}`}
                  onClick={() => onSelectGlyph(g)}
                >
                  <img
                    className="modal-img"
                    src={`images/glyphs/${g.icon}.jpg`}
                    alt=""
                  />
                  <div className="g-name">
                    {g.name}
                  </div>
                  {g.description}
                </div>
              ))}
          </div>
        </div>
      </Modal>
    </>
  );
}

export default observer(GlyphsModal);

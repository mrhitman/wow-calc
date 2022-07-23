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
  console.log(context.state);

  return (
    <>
      <div onClick={() => setShowModal(true)}>
        <div
          style={{
            width: 80,
            height: 80,
            display: "block",
            border: "1px solid white",
            color: "white",
          }}
        >
          {glyph ? (
            <img
              src={`https://wotlk.evowow.com/static/images/wow/icons/medium/${glyph.icon}.jpg`}
              alt=""
            />
          ) : (
            `Glyph ${small ? "small" : "big"}`
          )}
        </div>
      </div>
      <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
        <div
          style={{
            display: "block",
            width: 900,
            height: 500,
            backgroundColor: "grey",
          }}
        >
          {glyphs
            .filter(
              (g) =>
                g.classId === classInfo.id && g.glyphType === (small ? 2 : 1)
            )
            .map((g) => (
              <div key={g.id} onClick={() => onSelectGlyph(g)}>
                <img
                  src={`https://wotlk.evowow.com/static/images/wow/icons/small/${g.icon}.jpg`}
                  alt=""
                />
                {g.name}
              </div>
            ))}
          <button onClick={() => setShowModal(false)}>CLOSE</button>
        </div>
      </Modal>
    </>
  );
}

export default GlyphsModal;

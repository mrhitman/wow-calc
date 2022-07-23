import React, {useContext, useState} from "react";

import {Modal} from "react-tiny-modal";
import {WowCalculatorContext} from "../store";
import {classes} from "../store/data/classes";
import {glyphs} from "../store/data/glyphs";

function GlyphsModal({small}) {
  const [showModal, setShowModal] = useState(false);
  const context = useContext(WowCalculatorContext);

  if (!context.state.classId) {
    return;
  }

  const classInfo = classes.find((c) => c.id === context.state.classId);

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
          Glyph {small ? "small" : "big"}
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
              <div key={g.id}>{g.name}</div>
            ))}
          <button onClick={() => setShowModal(false)}>CLOSE</button>
        </div>
      </Modal>
    </>
  );
}

export default GlyphsModal;

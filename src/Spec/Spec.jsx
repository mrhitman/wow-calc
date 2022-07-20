import "./Spec.scss";
import React, {useContext} from "react";

import {WowCalculatorContext} from "../store";
import first from "lodash/first";
import groupBy from "lodash/groupBy";
import times from "lodash/times";
import {actions} from "../store/actions";

const spec = [
  {id: 1, name: "foo", row: 0, col: 1, maxPoints: 5},
  {id: 2, name: "bar", row: 0, col: 2, maxPoints: 5},
  {id: 3, name: "bar", row: 1, col: 0, maxPoints: 4},
  {id: 4, name: "bar", row: 1, col: 2, maxPoints: 3},
  {id: 5, name: "bar", row: 1, col: 3, maxPoints: 5},
  {id: 6, name: "bar", row: 2, col: 0, maxPoints: 5},
  {id: 7, name: "bar", row: 2, col: 1, maxPoints: 2},
  {id: 8, name: "bar", row: 2, col: 2, maxPoints: 5},
  {id: 9, name: "bar", row: 2, col: 3, maxPoints: 5},
  {id: 10, name: "bar", row: 3, col: 1, maxPoints: 3},
  {id: 11, name: "bar", row: 3, col: 2, maxPoints: 5},
  {id: 12, name: "bar", row: 3, col: 3, maxPoints: 5},
  {id: 13, name: "bar", row: 4, col: 0, maxPoints: 1},
  {id: 14, name: "bar", row: 4, col: 1, maxPoints: 5},
  {id: 15, name: "bar", row: 4, col: 3, maxPoints: 3},
  {id: 16, name: "bar", row: 5, col: 1, maxPoints: 5},
  {id: 17, name: "bar", row: 5, col: 2, maxPoints: 2},
  {id: 18, name: "bar", row: 6, col: 1, maxPoints: 5},
  {id: 19, name: "bar", row: 6, col: 2, maxPoints: 5},
  {id: 19, name: "bar", row: 7, col: 1, maxPoints: 5},
  {id: 20, name: "bar", row: 7, col: 2, maxPoints: 3},
  {id: 20, name: "bar", row: 8, col: 1, maxPoints: 5},
  {id: 21, name: "bar", row: 8, col: 2, maxPoints: 5},
  {id: 21, name: "bar", row: 9, col: 1, maxPoints: 4},
  {id: 22, name: "bar", row: 9, col: 2, maxPoints: 5},
  {id: 23, name: "bar", row: 10, col: 2, maxPoints: 1},
];

function Talant({skill}) {
  const context = useContext(WowCalculatorContext);
  const points = context.state.points.filter((p) => p === skill);

  return (
    <div
      className="skill"
      onClick={() => {
        if (points.length === skill.maxPoints) {
          return;
        }

        context.dispatch({
          type: actions.ADD_POINT,
          payload: skill,
        });
      }}
      onContextMenu={(e) => {
        e.preventDefault();

        context.dispatch({
          type: actions.REMOVE_POINT,
          payload: skill,
        });
      }}
    >
      <img
        src="https://wow.zamimg.com/images/wow/icons/medium/class_shaman.jpg"
        alt={skill.name}
      />
      <div className="badge">
        {points.length}/
        {skill.maxPoints}
      </div>
    </div>
  );
}

function Spec() {
  return (
    <div className="spec">
      {Object.values(groupBy(spec, "row")).map((row) => {
        const grouped = groupBy(row, "col");

        return new times(4, (n) =>
          grouped[n] ? (
            <Talant key={n} skill={first(grouped[n])} />
          ) : (
            <div className="empty" key={n} />
          )
        );
      })}
    </div>
  );
}

export default Spec;

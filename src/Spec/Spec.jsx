import React from "react";
import groupBy from "lodash/groupBy";
import times from "lodash/times";

const spec = [
  {id: 1, name: "foo", row: 0, col: 1},
  {id: 2, name: "bar", row: 0, col: 2},
  {id: 3, name: "bar", row: 1, col: 0},
  {id: 4, name: "bar", row: 1, col: 2},
  {id: 5, name: "bar", row: 1, col: 3},
  {id: 6, name: "bar", row: 2, col: 0},
  {id: 7, name: "bar", row: 2, col: 1},
  {id: 8, name: "bar", row: 2, col: 2},
  {id: 9, name: "bar", row: 2, col: 3},
  {id: 10, name: "bar", row: 3, col: 1},
  {id: 11, name: "bar", row: 3, col: 2},
  {id: 12, name: "bar", row: 3, col: 3},
  {id: 13, name: "bar", row: 4, col: 0},
  {id: 14, name: "bar", row: 4, col: 1},
  {id: 15, name: "bar", row: 4, col: 3},
  {id: 16, name: "bar", row: 5, col: 1},
  {id: 17, name: "bar", row: 5, col: 2},
  {id: 18, name: "bar", row: 6, col: 1},
  {id: 19, name: "bar", row: 6, col: 2},
  {id: 19, name: "bar", row: 7, col: 1},
  {id: 20, name: "bar", row: 7, col: 2},
  {id: 20, name: "bar", row: 8, col: 1},
  {id: 21, name: "bar", row: 8, col: 2},
  {id: 21, name: "bar", row: 9, col: 1},
  {id: 22, name: "bar", row: 9, col: 2},
  {id: 23, name: "bar", row: 10, col: 2},
];

function Spec() {
  return (
    <div className="spec">
      {Object.values(groupBy(spec, "row")).map((row) => {
        const grouped = groupBy(row, "col");
        return new times(4, (n) => (
          <div className={grouped[n] ? "skill" : "empty"} key={n} />
        ));
      })}
    </div>
  );
}

export default Spec;

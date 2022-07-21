import React from "react";
import Talent from "./Talent";
import first from "lodash/first";
import groupBy from "lodash/groupBy";
import times from "lodash/times";

export default function SpecRow({row}) {
  const grouped = groupBy(row, "col");

  return new times(4, (n) =>
    grouped[n] ? (
      <Talent key={n} skill={first(grouped[n])} />
    ) : (
      <div className="empty" key={n} />
    )
  );
}

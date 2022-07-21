import React from "react";

function TalentPopover({current, next}) {
  return (
    <div
      style={{
        display: "block",
        border: "solid 1px white",
        color: "white",
        padding: 20,
        backgroundColor: "grey",
      }}
    >
      <pre>
        {JSON.stringify(current === next ? {next} : {current, next}, null, 2)}
      </pre>
    </div>
  );
}

export default TalentPopover;

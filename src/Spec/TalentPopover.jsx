import React from "react";

function TalentPopover({current, next, talent}) {
  return (
    <div className="popover"
      // style={{
      //   display: "block",
      //   border: "solid 1px white",
      //   color: "white",
      //   padding: 20,
      //   backgroundColor: "grey",
      // }}
    >
      <pre>
        {/* {JSON.stringify(current === next ? {next} : {current, next}, null, 2)}
        {JSON.stringify(talent, null, 2)} */}
        <h3 className="popover-title">Improved Frostbolt</h3>
        <p className="popover-text">Reduces the casting time of your Frostbolt spell by 0.5 sec.</p>
        <button className="popover-btn">Right click to unlearn</button>
      </pre>
    </div>
  );
}

export default TalentPopover;

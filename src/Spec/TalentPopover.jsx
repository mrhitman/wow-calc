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
        <h3 className="popover-title">{next?.name_enus ?? current?.name_enus}</h3>
        <p className="popover-text">{next?.description ?? current?.description}</p>
        <div className="popover-btn">Right click to unlearn</div>
        <div className="rank">rank 5</div>
      </pre>
    </div>
  );
}

export default TalentPopover;

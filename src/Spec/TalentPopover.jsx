import React from "react";

function TalentPopover({current, next, talent}) {
  return (
    <div className="popover">
      <h3 className="popover-title">{next?.name_enus ?? current?.name_enus}</h3>
      <p className="popover-text">
        {next?.description ?? current?.description}
      </p>
      {next && <div className="popover-btn">Left click to learn</div>}
      {current && <div className="popover-btn">Right click to unlearn</div>}
      <div className="rank">{next?.tank_enus ?? current?.rank_enus}</div>
    </div>
  );
}

export default TalentPopover;

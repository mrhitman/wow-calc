import "./Spec.scss";

import React from "react";

function SpecHeader({leading, title, trailing, onClick}) {
    return (
        <div className="spec-header flex justify-between items-center">
            <div className="flex items-center">
                {leading && <div className="spec-icon">{leading}</div>}
                <div className="spec-name">{title}</div>
            </div>
            <div className="wrap-point flex items-center">
                {trailing && <div className="spec-points">{trailing}</div>}
                <div className="spec-reset" onClick={onClick} />
            </div>
        </div>
    );
}

export default SpecHeader;
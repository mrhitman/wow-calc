import "./ClassBanner.scss";

import React from "react";

function ClassBanner() {
    return (
        <div className="banner">
            <div className="holder"></div>
            <div className="flex items-center">
                <h2 className="title-banner">Boost yor character</h2>
                <button className="btn">get a boost</button>
                <div className="image-wrapper">
                    <img
                        src={require("../images/banner-group.png")}
                        alt=""
                    />
                </div>
            </div>
        </div>
    );
  }
  
  export default ClassBanner;
  
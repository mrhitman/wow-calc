import "./ClassFooter.scss";

import React from "react";

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-group flex justify-between items-center">
          <a href="/" className="logo">
            <img
              className="footer-logo"
              src="images/wowtalentcalculator-logo.png"
              alt=""
            />
          </a>
          <div className="footer-text">
            Copyright © 2022,
            <a href="/" className="footer-link">
              {" "}
              Wotlktalentcalculator.com
            </a>
            {/* <br /> */}
          </div>
          <ul className="social flex items-center">
            <li>
              <a href="/">
                <img
                  className="social-icon"
                  src="images/icon-svg/Traced2.svg"
                  alt="Discord"
                />
              </a>
            </li>
            <li>
              <a href="/">
                <img
                  className="social-icon"
                  src="images/icon-svg/Traced1.svg"
                  alt="YouTube"
                />
              </a>
            </li>
            <li>
              <a href="/">
                <img
                  className="social-icon"
                  src="images/icon-svg/Vector1.svg"
                  alt="Facebook"
                />
              </a>
            </li>
            <li>
              <a href="/">
                <img
                  className="social-icon"
                  src="images/icon-svg/Group.svg"
                  alt="instagram"
                />
              </a>
            </li>
            <li>
              <a href="/">
                <img
                  className="social-icon"
                  src="images/icon-svg/Vector2.svg"
                  alt="Twitter"
                />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

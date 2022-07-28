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
              src="images/playcarry-logo.png"
              alt=""
            />
          </a>
          <span className="footer-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
            <br /> dapibus porttitor mauris id eleifend.
          </span>
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
                  src="images/icon-svg/Vector1.svg"
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

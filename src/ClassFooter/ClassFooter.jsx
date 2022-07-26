import "./ClassFooter.scss";

import React from 'react';
import traced1 from "../images/icon-svg/Traced1.svg";
import traced2 from "../images/icon-svg/Traced2.svg";
import vector1 from "../images/icon-svg/Vector1.svg";
import group from "../images/icon-svg/Group.svg";
import vector2 from "../images/icon-svg/Vector2.svg";

function Footer() {
  return (
    <footer className='footer'>
        <div className="container">
            <div className='footer-group flex justify-between items-center'>
                <a href="/">
                    <img className="footer-logo" src={require("../images/playcarry-logo.png")} alt="" />
                </a>
                <span className="footer-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris<br /> dapibus porttitor mauris id eleifend.
                </span>
                <ul className='social flex items-center flex-wrap'>
                    <li>
                        <a href="/">
                            <img className="social-icon" src={traced2} alt="Discord" />
                        </a>
                    </li>
                    <li>
                        <a href="/">
                            <img className="social-icon" src={traced1} alt="YouTube" />
                        </a>
                    </li>
                    <li>
                        <a href="/">
                            <img className="social-icon" src={vector1} alt="Facebook" />
                        </a>
                    </li>
                    <li>
                        <a href="/">
                            <img className="social-icon" src={group} alt="instagram" />
                        </a>
                    </li>
                    <li>
                        <a href="/">
                            <img className="social-icon" src={vector2} alt="Twitter" />
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </footer>
  )
}

export default Footer;
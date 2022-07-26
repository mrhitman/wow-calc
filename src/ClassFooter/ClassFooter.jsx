import "./ClassFooter.scss";

import React from 'react';
// import {Link} from "react-router-dom";

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
                            <img className="footer-logo" src="../images/icon-svg/Traced1.svg" alt="" />
                        </a>
                    </li>
                    <li>
                        <a href="/">
                            <img className="footer-logo" src={require("../images/icon-svg/Traced1.svg")} alt="" />
                        </a>
                    </li>
                    <li>
                        <a href="/">
                            <img className="footer-logo" src={require("../images/icon-svg/Traced1.svg")} alt="" />
                        </a>
                    </li>
                    <li>
                        <a href="/">
                            <img className="footer-logo" src={require("../images/icon-svg/Traced1.svg")} alt="" />
                        </a>
                    </li>
                    <li>
                        <a href="/">
                            <img className="footer-logo" src={require("../images/icon-svg/Traced1.svg")} alt="" />
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </footer>
  )
}

export default Footer;
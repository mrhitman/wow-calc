import "./ClassFooter.scss";

import React from 'react';

function Footer() {
  return (
    <footer className='footer'>
        <div className="container">
            <div className='flex justify-between items-center'>
                <a href="/">
                    <img className="footer-logo" src={require("../images/playcarry-logo.png")} alt="" />
                </a>
                <span className="footer-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris<br /> dapibus porttitor mauris id eleifend.
                </span>
                <ul className='social'>
                    <li></li>
                </ul>
            </div>
        </div>
    </footer>
  )
}

export default Footer;
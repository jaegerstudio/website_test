import React from 'react'

//src
import './FooterPage.scss'

const FooterPage = () => {
  return (
    <div className="footer-page-container">
      <div className="footer-page-links">
        <img
          className="footer-page-logo-img"
          height="150px"
          width="150px"
          src="./assets/icons/logo white.svg"
          alt="logo"
        />
        <div className="footer-page-actions">
          <p>Privacy Policy</p>
          <p>About Us</p>
          <p>Contact Us</p>
        </div>
      </div>
      <p className="footer-page-copyright">© Company name 2010 — 2020</p>
    </div>
  );
}

export default FooterPage
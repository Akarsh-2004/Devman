import React from 'react';
import './Footer.css';
import { FaFacebook, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="container">
        <div className="footer-content">
          <div className="footer-about">
            <h3 className="footer-title">Devman Technology Solutions</h3>
            <p className="footer-description">
              We started offering our services as an offshore development enterprise. We have grown over the years to become a familiar name in offshore R&D investment for ISVs worldwide. We are a strategic R&D, and end-to-end product development choice for many leading ISVs.
            </p>
          </div>
          <div className="footer-columns">
            <div className="footer-column">
              <div className="footer-contact-form">
                <label className="contact-label">What can we help you with?</label>
                <label className="contact-label-sub">Provide your email address to let us help you better.</label>
                <form className="contact-form">
                  <div className="form-input-group">
                    <input type="email" className="form-input" placeholder="Email" />
                    <button type="submit" className="submit-btn">SUBMIT</button>
                  </div>
                </form>
              </div>
            </div>
            <div className="footer-column footer-links">
              <ul className="social-links">
                <li>
                  <a href="https://in.linkedin.com/company/devman-technology-solution" className="social-link" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin className="social-icon" />
                    <span>LinkedIn</span>
                  </a>
                </li>
                <li>
                  <a href="https://www.facebook.com/devmantechnology/" className="social-link" target="_blank" rel="noopener noreferrer">
                    <FaFacebook className="social-icon" />
                    <span>Facebook</span>
                  </a>
                </li>
              </ul>
              <ul className="footer-links-nav">
                <li><a href="contact-us.html" className="footer-link-item">Contact Us</a></li>
                <li><a href="about-us.html" className="footer-link-item">About Us</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Devman Technology Solutions. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
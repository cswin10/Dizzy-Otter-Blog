import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faLinkedin, faFacebook, faTwitter } from '@fortawesome/free-brands-svg-icons';
import logo from '../images/Untitled design (3).png'; // Import the logo image

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">
          <img src={logo} alt="Dizzy Otter Logo" />
        </div>
        <div className="footer-links">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <a href="https://www.dizzyotterdesigns.com">Website</a>
          <Link to="/contact">Contact</Link>
          <Link to="/privacy-policy">Privacy Policy</Link>
        </div>
        <div className="footer-socials">
          <a href="https://www.instagram.com/dizzy_otter_designs/" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a href="https://www.linkedin.com/in/charlie-swinhoe-72b27834b/" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a href="https://www.facebook.com/profile.php?id=61574419310992" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faFacebook} />
          </a>
          <a href="https://x.com/Dizzy_Otter_" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faTwitter} />
          </a>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2025 Dizzy Otter Ltd. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
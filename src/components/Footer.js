import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faLinkedin, faTiktok } from '@fortawesome/free-brands-svg-icons';
import logo from '../images/Untitled design (3).png'; // Import the logo image

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">
          <img src={logo} alt="Dizzy Otter Logo" />
        </div>
        <div className="footer-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="https://www.dizzyotterdesigns.com">Website</a>
          <a href="#contact">Contact</a>
        </div>
        <div className="footer-socials">
          <a href="https://www.instagram.com/dizzy_otter_designs/" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a href="https://www.linkedin.com/in/charlie-swinhoe-72b27834b/" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a href="https://tiktok.com/@dizzyotter" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faTiktok} />
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
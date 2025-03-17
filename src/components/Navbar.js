import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from '../images/Untitled design (3).png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faLinkedin, faFacebook, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/" onClick={closeMobileMenu}>
          <img src={logo} alt="Dizzy Otter Logo" />
        </Link>
      </div>
      <div className={`navbar-center ${isMobileMenuOpen ? 'hide' : ''}`}>
        <div className="navbar-title">
          Dizzy Otter Blog
        </div>
        <ul className="navbar-links">
          <li><Link to="/" onClick={closeMobileMenu}>Home</Link></li>
          <li><Link to="/about" onClick={closeMobileMenu}>About</Link></li>
          <li><a href="https://www.dizzyotterdesigns.com" target="_blank" rel="noopener noreferrer">Website</a></li>
          <li><Link to="/contact" onClick={closeMobileMenu}>Contact</Link></li>
        </ul>
      </div>
      <div className={`navbar-socials ${isMobileMenuOpen ? 'hide' : ''}`}>
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
      <div className="navbar-hamburger" onClick={toggleMobileMenu}>
        <FontAwesomeIcon icon={faBars} />
      </div>
      <div className={`mobile-menu ${isMobileMenuOpen ? 'open' : ''}`}>
        <div className="mobile-menu-header">
          <FontAwesomeIcon icon={faTimes} onClick={toggleMobileMenu} />
        </div>
        <div className="mobile-menu-logo">
          <Link to="/" onClick={closeMobileMenu}>
            <img src={logo} alt="Dizzy Otter Logo" />
          </Link>
          <div className="mobile-menu-title">Dizzy Otter Blog</div>
        </div>
        <ul className="mobile-menu-links">
          <li><Link to="/" onClick={closeMobileMenu}>Home</Link></li>
          <li><Link to="/about" onClick={closeMobileMenu}>About</Link></li>
          <li><a href="https://www.dizzyotterdesigns.com" target="_blank" rel="noopener noreferrer" onClick={closeMobileMenu}>Website</a></li>
          <li><Link to="/contact" onClick={closeMobileMenu}>Contact</Link></li>
        </ul>
        <div className="mobile-menu-socials">
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
    </nav>
  );
};

export default Navbar;
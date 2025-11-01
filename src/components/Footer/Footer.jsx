import React from "react";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";
import "./Footer.scss";

import logo from '../../assets/logo.jpeg'
import cpmy from '../../data/cmy'
import cmpy from "../../data/cmy";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        
        {/* Logo + Description */}
        <div className="footer-section about">
          <div className="footer-logo">
          <Link to="/" >
            <img src={logo} alt="Logo" />
          </Link>
        </div>
          <p>
            We convert visions into celebrations - every time..
          </p>
          <div className="social-icons">
            <a href="#"><FaFacebookF /></a>
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaLinkedinIn /></a>
            <a href="#"><FaTwitter /></a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="footer-section links">
          <h3>Quick Links</h3>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/achievement">Achievement</Link></li>
            <li><Link to="/career">Career</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        {/* Services */}
        <div className="footer-section services">
          <h3>Our Services</h3>
          <ul>
            
            <li><Link to="/services">Support Services</Link></li>
            <li><Link to="/production">Event Production</Link></li>
            <li><Link to="/management">Event Management</Link></li>
            <li><Link to="/promotion">Media & Promotion</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="footer-section contact">
          <h3>Contact Us</h3>
          <p><FaMapMarkerAlt /> {cmpy.address}</p>
          <p><FaPhoneAlt /> {cpmy.mobile}</p>
          <p><FaEnvelope /> {cpmy.mail}</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} {cpmy.name} All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;

// src/components/Footer.jsx
import React from "react";
import './footer.css';
import { 
  FaEnvelope, 
  FaPhoneAlt, 
  FaMapMarkerAlt,
  FaFacebookF, 
  FaInstagram, 
  FaTwitter, 
  FaWhatsapp,
  FaUmbrellaBeach,
  FaWater,
  FaFish,
  FaSwimmer
} from "react-icons/fa";

const Footer = () => {
  // SocialIcons component for reuse
  const SocialIcons = () => {
    const socialLinks = [
  {
    icon: <FaFacebookF />,
    url: "",
    color: "#1877F2"
  },
  {
    icon: <FaInstagram />,
    url: "",
    color: "#E4405F"
  },
  {
    icon: <FaWhatsapp />,
    url: "",
    color: "#25D366"
  }
];


    return (
      <div className="social-icons">
        {socialLinks.map((social, index) => (
          <a
            key={index}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
            style={{ color: social.color }}
          >
            {social.icon}
          </a>
        ))}
      </div>
    );
  };

  return (
    <footer className="contact-footer">
      {/* FOOTER SECTION WITH CONTACT INFO */}
      <div className="footer-content">
        {/* CONTACT INFO CARD */}
        <div className="contact-info-card">
          <div className="contact-left">
            <div className="resort-header">
             
              <h2>Contact Us</h2>
            </div>

            <ul className="contact-info-list">
              <li>
                <FaEnvelope className="footer-icon" />
                <a href="mailto:KinaraResort@gmail.com">ClaresCoveGuestHouse@gmail.com</a>
              </li>
              <li>
                <FaPhoneAlt className="footer-icon" />
                <div className="phone-numbers">
                  <a href="tel:+91 98765 43210">+91 98765 43210</a>
                 
                </div>
              </li>
              <li>
                <FaMapMarkerAlt className="footer-icon" />
                <span>Holiday St, Gauravaddo, Calangute, Goa 403516</span>
              </li>
            </ul>
            
            <div className="social-section">
              <h4>Connect With Us</h4>
              <br />
              <SocialIcons />
            </div>
          </div>
        </div>

        {/* QUICK LINKS */}
       <div className="footer-quick-links">
  <h3>Quick Links</h3>
  <ul>
    <li>
      <a href="http://localhost:3000/home">Home</a>
    </li>
    <li>
      <a href="http://localhost:3000/about">About Us</a>
    </li>
    <li>
      <a href="http://localhost:3000/gallery">Gallery</a>
    </li>
    <li>
      <a href="http://localhost:3000/contact">Contact</a>
    </li>
  </ul>
</div>
        {/* DEVELOPER CREDIT */}
        <div className="footer-newsletter">
          <h3>Developed By</h3>
          <p>KA IT Solutions</p>
        </div>
      </div> {/* Closing div for .footer-content */}

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Clares Cove Guest House. All rights reserved.</p>
        
      </div>
    </footer>
  );
};

export default Footer;
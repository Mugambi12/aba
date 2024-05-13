import React from "react";
import "./Footer.css";
import mailIcon from "../../assets/images/mail-icon.png";
import arrowButton from "../../assets/arrow_btn.png";

const Footer = () => {
  const year = new Date().getFullYear();
  const month = new Date().toLocaleString("default", { month: "long" });

  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="footer-row">
          <div className="footer-col logo-section">
            <h2 className="logo">ABA</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga,
              unde!
            </p>
          </div>

          <div className="footer-col office-section">
            <h3>Office</h3>
            <p>123 Main Street</p>
            <p>City, State 12345</p>
            <p className="email">company@example.com</p>
            <p>Phone: +00 - 123-456-7890</p>
          </div>

          <div className="footer-col links-section">
            <h3>Quick Links</h3>
            <ul>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">Services</a>
              </li>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Features</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
          </div>

          <div className="footer-col newsletter-section">
            <h3>Newsletter</h3>
            <p>Subscribe to our newsletter to get the latest updates</p>
            <form>
              <i className="fas fa-envelope mail-icon"></i>
              <input type="email" placeholder="Enter your email" required />
              <button type="submit">
                <i className="fas fa-arrow-right arrow-button"></i>
              </button>
            </form>

            <div className="social-icons">
              <a href="#" title="LinkedIn">
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a href="#" title="Facebook">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" title="Twitter">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" title="Instagram">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" title="YouTube">
                <i className="fab fa-youtube"></i>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="sub-footer">
        <p>
          &copy; {year} {month} ABA. All rights reserved.
        </p>
        <ul>
          <li>
            <a href="#">Terms of Service</a>
          </li>
          <li>
            <a href="#">Privacy Policy</a>
          </li>
          <li>
            <a href="#">Cookie Policy</a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;

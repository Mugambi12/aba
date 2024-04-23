import React, { useState } from "react";
import "./Navbar.css";
import logo from "../../assets/images/logo.png";
import { MdNavigateNext, MdOutlineDensityMedium } from "react-icons/md";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <nav className="container navbar">
      {/* Navbar header */}
      <div className="nav-header">
        {/* Logo */}
        <div className="logo">
          <img src={logo} alt="Biodiversity Alliance Logo" />
        </div>

        {/* Hamburger menu */}
        <div className="menu-toggle" onClick={toggleMenu}>
          <MdOutlineDensityMedium />
        </div>
      </div>

      {/* Navbar links */}
      <ul className={`nav-links ${isOpen ? "open" : ""}`}>
        <li className="nav-item">
          <a href="#">Home</a>
        </li>
        <li className="nav-item">
          <a href="#">About Us</a>
        </li>

        {/* Programs Dropdown */}
        <li className="nav-item dropdown">
          <a href="#" className="nav-link">
            Programs
          </a>
          <ul className="dropdown-menu">
            <li>
              <a href="#">
                <MdNavigateNext /> Thematic Areas
              </a>
            </li>
            <li>
              <a href="#">
                <MdNavigateNext /> Current Programs
              </a>
            </li>
            <li>
              <a href="#">
                <MdNavigateNext /> Future Programs
              </a>
            </li>
            <li>
              <a href="#">
                <MdNavigateNext /> Completed Programs
              </a>
            </li>
          </ul>
        </li>

        {/* Resources Dropdown */}
        <li className="nav-item dropdown">
          <a href="#" className="nav-link">
            Resources
          </a>
          <ul className="dropdown-menu">
            <li>
              <a href="#">
                <MdNavigateNext /> News
              </a>
            </li>
            <li>
              <a href="#">
                <MdNavigateNext /> Guides
              </a>
            </li>
            <li>
              <a href="#">
                <MdNavigateNext /> Interviews
              </a>
            </li>
            <li>
              <a href="#">
                <MdNavigateNext /> Publications
              </a>
            </li>
            <li>
              <a href="#">
                <MdNavigateNext /> Books
              </a>
            </li>
            <li>
              <a href="#">
                <MdNavigateNext /> Podcasts
              </a>
            </li>
          </ul>
        </li>

        {/* Partners Dropdown */}
        <li className="nav-item dropdown">
          <a href="#" className="nav-link">
            Our Partners
          </a>
          <div className="dropdown-menu partners-dropdown">
            <div className="region">
              <h1>Central Africa</h1>
              <ul className="column">
                <li>
                  <a href="#">
                    <MdNavigateNext /> Wildlife Conservation Trust
                  </a>
                </li>
                <li>
                  <a href="#">
                    <MdNavigateNext /> Digital Education Access
                  </a>
                </li>
                <li>
                  <a href="#">
                    <MdNavigateNext /> Innovative Healthcare Solutions
                  </a>
                </li>
              </ul>
            </div>
            <div className="region">
              <h1>Eastern Africa</h1>
              <ul className="column">
                <li>
                  <a href="#">
                    <MdNavigateNext /> Smart Connectivity
                  </a>
                </li>
                <li>
                  <a href="#">
                    <MdNavigateNext /> Sustainable Livelihoods
                  </a>
                </li>
                <li>
                  <a href="#">
                    <MdNavigateNext /> Eco Farming Group
                  </a>
                </li>
              </ul>
            </div>
            <div className="region">
              <h1>Southern Africa</h1>
              <ul className="column">
                <li>
                  <a href="#">
                    <MdNavigateNext /> Innovative Tech Solutions
                  </a>
                </li>
                <li>
                  <a href="#">
                    <MdNavigateNext /> Green Growth Initiatives
                  </a>
                </li>
                <li>
                  <a href="#">
                    <MdNavigateNext /> Health First Foundation
                  </a>
                </li>
              </ul>
            </div>
            <div className="region">
              <h1>Western Africa</h1>
              <ul className="column">
                <li>
                  <a href="#">
                    <MdNavigateNext /> Tech Pioneers
                  </a>
                </li>
                <li>
                  <a href="#">
                    <MdNavigateNext /> Sustainable Development Network
                  </a>
                </li>
                <li>
                  <a href="#">
                    <MdNavigateNext /> Water Access Initiative
                  </a>
                </li>
              </ul>
            </div>
            <div className="region">
              <h1>International</h1>
              <ul className="column">
                <li>
                  <a href="#">
                    <MdNavigateNext /> Global Tech Innovators
                  </a>
                </li>
                <li>
                  <a href="#">
                    <MdNavigateNext /> Worldwide Conservation Network
                  </a>
                </li>
                <li>
                  <a href="#">
                    <MdNavigateNext /> Global Health Initiative
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </li>

        <li className="nav-item">
          <a href="#">Testimonials</a>
        </li>
        <li className="nav-item">
          <a href="#">Contact Us</a>
        </li>
      </ul>

      {/* Login button */}
      <ul className="nav-links">
        <li className="nav-item">
          <a href="#" className="login">
            Login
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

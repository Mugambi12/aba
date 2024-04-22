import React from "react";
import "./Navbar.css";
import logo from "../../assets/images/logo.png";

const Navbar = () => {
  return (
    <nav className="container navbar">
      {/* Logo */}
      <div className="logo">
        <img src={logo} alt="Biodiversity Alliance Logo" />
      </div>

      {/* Navbar links */}
      <ul className="nav-links">
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
              <a href="#">Current Programs</a>
            </li>
            <li>
              <a href="#">Future Programs</a>
            </li>
            <li>
              <a href="#">Completed Programs</a>
            </li>
          </ul>
        </li>

        {/* Partners Dropdown */}
        <li className="nav-item dropdown">
          <a href="#" className="nav-link">
            Partners
          </a>
          <div className="dropdown-menu partners-dropdown">
            <div className="region">
              <h1>Southern Africa</h1>
              <ul className="column">
                <li>
                  <a href="#">Innovative Tech Solutions</a>
                </li>
                <li>
                  <a href="#">Green Growth Initiatives</a>
                </li>
                <li>
                  <a href="#">Health First Foundation</a>
                </li>
              </ul>
            </div>
            <div className="region">
              <h1>Eastern Africa</h1>
              <ul className="column">
                <li>
                  <a href="#">Smart Connectivity</a>
                </li>
                <li>
                  <a href="#">Sustainable Livelihoods</a>
                </li>
                <li>
                  <a href="#">Eco Farming Group</a>
                </li>
              </ul>
            </div>
            <div className="region">
              <h1>Central Africa</h1>
              <ul className="column">
                <li>
                  <a href="#">Wildlife Conservation Trust</a>
                </li>
                <li>
                  <a href="#">Digital Education Access</a>
                </li>
                <li>
                  <a href="#">Innovative Healthcare Solutions</a>
                </li>
              </ul>
            </div>
            <div className="region">
              <h1>Western Africa</h1>
              <ul className="column">
                <li>
                  <a href="#">Tech Pioneers</a>
                </li>
                <li>
                  <a href="#">Sustainable Development Network</a>
                </li>
                <li>
                  <a href="#">Water Access Initiative</a>
                </li>
              </ul>
            </div>
            <div className="region">
              <h1>International</h1>
              <ul className="column">
                <li>
                  <a href="#">Global Tech Innovators</a>
                </li>
                <li>
                  <a href="#">Worldwide Conservation Network</a>
                </li>
                <li>
                  <a href="#">Global Health Initiative</a>
                </li>
              </ul>
            </div>
          </div>
        </li>

        {/* Resources Dropdown */}
        <li className="nav-item dropdown">
          <a href="#" className="nav-link">
            Resources
          </a>
          <ul className="dropdown-menu">
            <li>
              <a href="#">News</a>
            </li>
            <li>
              <a href="#">Guides</a>
            </li>
            <li>
              <a href="#">Interviews</a>
            </li>
            <li>
              <a href="#">Publications</a>
            </li>
            <li>
              <a href="#">Books</a>
            </li>
            <li>
              <a href="#">Podcasts</a>
            </li>
          </ul>
        </li>

        <li className="nav-item">
          <a href="#">Testimonials</a>
        </li>
        <li className="nav-item">
          <a href="#">Contact Us</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

import React, { useState } from "react";
import { MdOutlineMenu, MdOutlineClose, MdNavigateNext } from "react-icons/md";
import "./Navbar.css";
import logo from "../../assets/images/logo.svg";

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
          <img src={logo} alt="African Biodiversity Alliance Logo" />
        </div>

        {/* Hamburger menu */}
        <div className="menu-toggle" onClick={toggleMenu}>
          <ul className={`nav-links ${isOpen ? "open" : ""}`}></ul>
          {isOpen ? (
            <MdOutlineClose className="menu-icon" />
          ) : (
            <MdOutlineMenu className="menu-icon" />
          )}
        </div>
      </div>

      {/* Navbar links */}
      <ul className={`nav-links ${isOpen ? "open" : ""}`}>
        <li className="nav-item">
          <a href="#" className="nav-link">
            Home
          </a>
        </li>

        {/* About Us Dropdown */}
        <li className="nav-item dropdown">
          <a href="#" className="nav-link">
            About Us
          </a>
          <ul className="dropdown-menu basic-dropdown">
            <li>
              <a href="#">
                <span className="list-icon">
                  <MdNavigateNext />
                </span>{" "}
                <span className="list-name">Our Story</span>
              </a>
            </li>
            <li>
              <a href="#">
                <span className="list-icon">
                  <MdNavigateNext />
                </span>{" "}
                <span className="list-name">Vision & Mission</span>
              </a>
            </li>
            <li>
              <a href="#">
                <span className="list-icon">
                  <MdNavigateNext />
                </span>{" "}
                <span className="list-name">Our History</span>
              </a>
            </li>
            <li>
              <a href="#">
                <span className="list-icon">
                  <MdNavigateNext />
                </span>{" "}
                <span className="list-name">Team</span>
              </a>
            </li>
            <li>
              <a href="#">
                <span className="list-icon">
                  <MdNavigateNext />
                </span>{" "}
                <span className="list-name">Testimonials</span>
              </a>
            </li>
          </ul>
        </li>

        {/* Programs Dropdown */}
        <li className="nav-item dropdown">
          <a href="#" className="nav-link">
            Programs
          </a>
          <ul className="dropdown-menu basic-dropdown">
            <li>
              <a href="#">
                <span className="list-icon">
                  <MdNavigateNext />
                </span>{" "}
                <span className="list-name">Conservation Initiatives</span>
              </a>
            </li>
            <li>
              <a href="#">
                <span className="list-icon">
                  <MdNavigateNext />
                </span>{" "}
                <span className="list-name">Research Projects</span>
              </a>
            </li>
            <li>
              <a href="#">
                <span className="list-icon">
                  <MdNavigateNext />
                </span>{" "}
                <span className="list-name">Community Engagement</span>
              </a>
            </li>
            <li>
              <a href="#">
                <span className="list-icon">
                  <MdNavigateNext />
                </span>{" "}
                <span className="list-name">Education and Outreach</span>
              </a>
            </li>
            <li>
              <a href="#">
                <span className="list-icon">
                  <MdNavigateNext />
                </span>{" "}
                <span className="list-name">Future Programs</span>
              </a>
            </li>
            <li>
              <a href="#">
                <span className="list-icon">
                  <MdNavigateNext />
                </span>{" "}
                <span className="list-name">Completed Programs</span>
              </a>
            </li>
          </ul>
        </li>

        <li className="nav-item">
          <a href="#" className="nav-link">
            Thematic Areas
          </a>
        </li>

        {/* Partners Dropdown */}
        <li className="nav-item dropdown">
          <a href="#" className="nav-link">
            Our Partners
          </a>
          <div className="dropdown-menu custom-dropdown">
            <div className="region">
              <h1>Central Africa</h1>
              <ul className="column">
                <li>
                  <a href="#">
                    <span className="list-icon">
                      <MdNavigateNext />
                    </span>
                    <span className="list-name">
                      Rainforest Preservation Network
                    </span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span className="list-icon">
                      <MdNavigateNext />
                    </span>
                    <span className="list-name">Wildlife Rescue Alliance</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span className="list-icon">
                      <MdNavigateNext />
                    </span>
                    <span className="list-name">
                      Central African Biodiversity Institute
                    </span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span className="list-icon">
                      <MdNavigateNext />
                    </span>
                    <span className="list-name">
                      Community Conservation Coalition
                    </span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span className="list-icon">
                      <MdNavigateNext />
                    </span>
                    <span className="list-name">
                      River Basin Protection Society
                    </span>
                  </a>
                </li>
              </ul>
            </div>
            <div className="region">
              <h1>Eastern Africa</h1>
              <ul className="column">
                <li>
                  <a href="#">
                    <span className="list-icon">
                      <MdNavigateNext />
                    </span>
                    <span className="list-name">Eastern Savannah Trust</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span className="list-icon">
                      <MdNavigateNext />
                    </span>
                    <span className="list-name">
                      Marine Conservation Foundation
                    </span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span className="list-icon">
                      <MdNavigateNext />
                    </span>
                    <span className="list-name">Forest Guardians</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span className="list-icon">
                      <MdNavigateNext />
                    </span>
                    <span className="list-name">
                      Sustainable Agriculture Association
                    </span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span className="list-icon">
                      <MdNavigateNext />
                    </span>
                    <span className="list-name">
                      Highland Ecosystem Network
                    </span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span className="list-icon">
                      <MdNavigateNext />
                    </span>
                    <span className="list-name">
                      Wildlife Research Institute
                    </span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span className="list-icon">
                      <MdNavigateNext />
                    </span>
                    <span className="list-name">
                      Eastern Africa Conservation Council
                    </span>
                  </a>
                </li>
              </ul>
            </div>
            <div className="region">
              <h1>Southern Africa</h1>
              <ul className="column">
                <li>
                  <a href="#">
                    <span className="list-icon">
                      <MdNavigateNext />
                    </span>
                    <span className="list-name">
                      Southern Plains Wildlife Society
                    </span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span className="list-icon">
                      <MdNavigateNext />
                    </span>
                    <span className="list-name">
                      Wildlife Tracking Organization
                    </span>
                  </a>
                </li>
              </ul>
            </div>
            <div className="region">
              <h1>Western Africa</h1>
              <ul class="column">
                <li>
                  <a href="#">
                    <span className="list-icon">
                      <MdNavigateNext />
                    </span>
                    <span class="list-name">
                      West African Nature Conservancy
                    </span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span class="list-icon">
                      <MdNavigateNext />
                    </span>
                    <span class="list-name">
                      Coastal Preservation Initiative
                    </span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span class="list-icon">
                      <MdNavigateNext />
                    </span>
                    <span class="list-name">Savanna Protection Network</span>
                  </a>
                </li>
              </ul>
            </div>
            <div className="region">
              <h1>International</h1>
              <ul class="column">
                <li>
                  <a href="#">
                    <span class="list-icon">
                      <MdNavigateNext />
                    </span>
                    <span class="list-name">Global Biodiversity Alliance</span>
                  </a>
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
          <ul className="dropdown-menu basic-dropdown">
            <li>
              <a href="#">
                <span className="list-icon">
                  <MdNavigateNext />
                </span>{" "}
                <span className="list-name">News</span>
              </a>
            </li>
            <li>
              <a href="#">
                <span className="list-icon">
                  <MdNavigateNext />
                </span>{" "}
                <span className="list-name">Guides</span>
              </a>
            </li>
            <li>
              <a href="#">
                <span className="list-icon">
                  <MdNavigateNext />
                </span>{" "}
                <span className="list-name">Interviews</span>
              </a>
            </li>
            <li>
              <a href="#">
                <span className="list-icon">
                  <MdNavigateNext />
                </span>{" "}
                <span className="list-name">Publications</span>
              </a>
            </li>
            <li>
              <a href="#">
                <span className="list-icon">
                  <MdNavigateNext />
                </span>{" "}
                <span className="list-name">Books</span>
              </a>
            </li>
            <li>
              <a href="#">
                <span className="list-icon">
                  <MdNavigateNext />
                </span>{" "}
                <span className="list-name">Podcasts</span>
              </a>
            </li>
          </ul>
        </li>

        <li className="nav-item">
          <a href="#" className="nav-link">
            Contact Us
          </a>
        </li>
      </ul>

      {/* Join us button */}
      <ul className="nav-links">
        <li className="nav-item">
          <button className="join-us">Be One of Us</button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

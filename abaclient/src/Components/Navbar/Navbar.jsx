import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = ({ videoPlayerState }) => {
  const [isSticky, setIsSticky] = useState(false);
  const navRef = useRef(null);

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    setIsSticky(scrollPosition > 50);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div className="navbar">
        <div
          className={`header-top ${
            isSticky && !videoPlayerState ? "hide-on-sticky" : ""
          }`}
        >
          <ul className="header-top__contact-info">
            <li>
              <a href="#!" title="company@example.dev">
                <i className="fas fa-envelope"></i>
                <span> &nbsp; info@company.com</span>
              </a>
            </li>
            <li>
              <a href="#!" title="+1234567890">
                <i className="fas fa-phone"></i>
                <span> &nbsp; +123-456-7890</span>
              </a>
            </li>
            <li>
              <a href="#!" title="Location Address">
                <i className="fas fa-map-marker-alt"></i>
                <span> &nbsp; 77 8th Ave, New York, NY 10011</span>
              </a>
            </li>
          </ul>

          <ul className="header-top__social-links">
            <li>
              <a href="#!" title="LinkedIn">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </li>
            <li>
              <a href="#!" title="Facebook">
                <i className="fab fa-facebook-f"></i>
              </a>
            </li>
            <li>
              <a href="#!" title="Twitter">
                <i className="fab fa-twitter"></i>
              </a>
            </li>
            <li>
              <a href="#!" title="Instagram">
                <i className="fab fa-instagram"></i>
              </a>
            </li>
            <li>
              <Link to="/auth" className="header-top__join-button">
                <span>Join Us</span>
              </Link>
            </li>
          </ul>
        </div>

        <nav
          className={`main-nav ${
            isSticky && !videoPlayerState ? "sticky" : ""
          }`}
          ref={navRef}
        >
          <div className="main-nav__logo">
            <a href="/">ABA</a>
          </div>
          <ul className="main-nav__menu">
            <li>
              <a className="main-nav__menu_link" href="/">
                Home
              </a>
            </li>
            <li>
              <a className="main-nav__menu_link" href="/our-story">
                Our Story
              </a>
            </li>
            <li>
              <a className="main-nav__menu_link" href="/our-campaign">
                Our Campaign
              </a>
            </li>
            <li>
              <a className="main-nav__menu_link" href="/thematic-areas">
                Thematic Areas
              </a>
              <ul className="dropdown-menu">
                <li className="dropdown-menu__item">
                  <a className="dropdown-menu__item_link" href="#!">
                    Habitat Preservation and Restoration
                  </a>
                </li>
                <li className="dropdown-menu__item">
                  <a className="dropdown-menu__item_link" href="#!">
                    Species Conservation
                  </a>
                </li>
                <li className="dropdown-menu__item">
                  <a className="dropdown-menu__item_link" href="#!">
                    Community Engagement and Education
                  </a>
                </li>
                <li className="dropdown-menu__item">
                  <a className="dropdown-menu__item_link" href="#!">
                    Climate Change Mitigation and Adaptation
                  </a>
                </li>
                <li className="dropdown-menu__item">
                  <a className="dropdown-menu__item_link" href="#!">
                    Sustainable Use of Natural Resources
                  </a>
                </li>
                <li className="dropdown-menu__item">
                  <a className="dropdown-menu__item_link" href="#!">
                    Policy Advocacy and Governance
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a className="main-nav__menu_link" href="/our-impact">
                Our Impact
              </a>
            </li>
            <li>
              <a className="main-nav__menu_link" href="/newsroom">
                News & Publications
              </a>
              <ul className="dropdown-menu">
                <li className="dropdown-menu__item">
                  <a className="dropdown-menu__item_link" href="/newsroom">
                    Newsroom
                  </a>
                </li>
                <li className="dropdown-menu__item">
                  <a className="dropdown-menu__item_link" href="/news-post">
                    Single News
                  </a>
                </li>
                <li className="dropdown-menu__item">
                  <a className="dropdown-menu__item_link" href="/publications">
                    Publications
                  </a>
                </li>
              </ul>
            </li>
          </ul>
          <ul>
            <li className="main-nav__contact">
              <a href="/contact-us">Contact Us</a>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Navbar;

import { useEffect, useRef, useState } from "react";
import "./Navbar.css";

const Navbar = ({ videoPlayerState }) => {
  const [isSticky, setIsSticky] = useState(false);
  const navRef = useRef(null);

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    setIsSticky(scrollPosition > 450);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div className="header-top">
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
            <button className="header-top__join-button">Join Us</button>
          </li>
        </ul>
      </div>

      <nav
        className={`main-nav ${isSticky && !videoPlayerState ? "sticky" : ""}`}
        ref={navRef}
      >
        <div className="main-nav__logo">
          <a href="#home">ABA</a>
        </div>
        <ul className="main-nav__menu">
          <li>
            <a href="#our-story">Our Story</a>
          </li>
          <li>
            <a href="#our-campaign">Our Campaign</a>
          </li>
          <li>
            <a href="#thematic-areas">Thematic Areas</a>
            <ul className="dropdown-menu">
              <li className="dropdown-menu__item">
                <a href="#!">Biodiversity Conservation</a>
              </li>
              <li className="dropdown-menu__item">
                <a href="#!">Climate Change</a>
              </li>
              <li className="dropdown-menu__item">
                <a href="#!">Ecosystem Restoration</a>
              </li>
              <li className="dropdown-menu__item">
                <a href="#!">Sustainable Development</a>
              </li>
              <li className="dropdown-menu__item">
                <a href="#!">Wildlife Protection</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="#our-impact">Our Impact</a>
          </li>
          <li>
            <a href="#research-insights">Research & Media</a>
            <ul className="dropdown-menu">
              <li className="dropdown-menu__item">
                <a href="#!">Research</a>
              </li>
              <li className="dropdown-menu__item">
                <a href="#!">Newsroom</a>
              </li>
              <li className="dropdown-menu__item">
                <a href="#!">Single News</a>
              </li>
            </ul>
          </li>
        </ul>
        <ul>
          <li className="main-nav__contact">
            <a href="#contact-us">Contact Us</a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;

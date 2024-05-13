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
      <div className="pre-nav">
        <ul>
          <li>
            <a href="#" title="Location Address">
              <i className="fas fa-map-marker-alt"></i>
            </a>
          </li>
          <li>
            <a href="#" title="company@example.dev">
              <i className="fas fa-envelope"></i>
            </a>
          </li>
          <li>
            <a href="#" title="+1234567890">
              <i className="fas fa-phone"></i>
            </a>
          </li>
        </ul>

        <ul>
          <li>
            <a href="#" title="LinkedIn">
              <i className="fab fa-linkedin-in"></i>
            </a>
          </li>
          <li>
            <a href="#" title="Facebook">
              <i className="fab fa-facebook-f"></i>
            </a>
          </li>
          <li>
            <a href="#" title="Twitter">
              <i className="fab fa-twitter"></i>
            </a>
          </li>
          <li>
            <a href="#" title="Instagram">
              <i className="fab fa-instagram"></i>
            </a>
          </li>
          <li>
            <button className="join-us-button">Join Us</button>
          </li>
        </ul>
      </div>

      <nav
        className={`nav ${isSticky && !videoPlayerState ? "sticky" : ""}`}
        ref={navRef}
      >
        <div className="nav-logo">
          <a href="#home">ABA</a>
        </div>
        <ul className="nav-menu">
          <li>
            <a href="#our-story">Our Story</a>
          </li>
          <li>
            <a href="#our-compaign">Our Campaign</a>
          </li>
          <li>
            <a href="#thematic-areas">Thematic Areas</a>
          </li>
          <li>
            <a href="#our-impact">Our Impact</a>
          </li>
          <li>
            <a href="#research-insights">Research & Media</a>
            <ul className="dropdown">
              <li className="dropdown-item">
                <a href="#research">Research</a>
              </li>
              <li className="dropdown-item">
                <a href="#!">Newsroom</a>
              </li>
              <li className="dropdown-item">
                <a href="#!">Single News</a>
              </li>
            </ul>
          </li>
        </ul>
        <ul>
          <li className="nav-contact">
            <a href="#contact-us">Contact Us</a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;

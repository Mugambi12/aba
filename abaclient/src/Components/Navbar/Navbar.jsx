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
          <a href="#">ABA</a>
        </div>
        <ul className="nav-menu">
          <li>
            <a href="#">Our Story</a>
          </li>
          <li>
            <a href="#">Our Campaign</a>
          </li>
          <li>
            <a href="#">Thematic Areas</a>
          </li>
          <li>
            <a href="#">Our Impact</a>
          </li>
          <li>
            <a href="#">Research & Insights</a>
          </li>
          <li>
            <a href="#">Media & Resources</a>
          </li>
        </ul>
        <ul>
          <li className="nav-contact">
            <a href="#">Contact Us</a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;

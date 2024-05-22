import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = ({ videoPlayerState }) => {
  const [isSticky, setIsSticky] = useState(false);
  const [activeMenu, setActiveMenu] = useState(null);
  const navRef = useRef(null);

  const handleScroll = () => {
    setIsSticky(window.scrollY > 100);
  };

  const toggleMenu = (index) => {
    setActiveMenu(activeMenu === index ? null : index);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="navbar">
      <div
        className={`header-top ${
          isSticky && !videoPlayerState ? "hide-on-sticky" : ""
        }`}
      >
        <ul className="header-top__contact-info">
          <li>
            <a href="mailto:info@company.com">
              <i className="fas fa-envelope"></i> &nbsp; info@company.com
            </a>
          </li>
          <li>
            <a href="tel:+1234567890">
              <i className="fas fa-phone"></i> &nbsp; +123-456-7890
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fas fa-map-marker-alt"></i> &nbsp; 77 8th Ave, New
              York, NY 10011
            </a>
          </li>
        </ul>
        <ul className="header-top__social-links">
          {["linkedin-in", "facebook-f", "twitter", "instagram", "youtube"].map(
            (icon) => (
              <li key={icon}>
                <a href="#">
                  <i className={`fab fa-${icon}`}></i>
                </a>
              </li>
            )
          )}
          <li>
            <Link to="/auth" className="header-top__join-button">
              <span>Join Us</span>
            </Link>
          </li>
        </ul>
      </div>

      <nav
        className={`main-nav ${isSticky && !videoPlayerState ? "sticky" : ""}`}
        ref={navRef}
      >
        <div className="main-nav__logo">
          <a href="/">ABA</a>
        </div>
        <ul className="main-nav__menu">
          {[
            {
              name: "Our Story",
              links: [
                { name: "History", href: "/our-story/history" },
                { name: "Status", href: "/our-story/status" },
                { name: "Board & Staff", href: "/our-story/board-staff" },
              ],
              href: "/our-story",
            },
            {
              name: "Where We Work",
              links: [
                {
                  name: "Central Africa",
                  href: "/where-we-work/central-africa",
                },
                { name: "East Africa", href: "/where-we-work/east-africa" },
                {
                  name: "Southern Africa",
                  href: "/where-we-work/southern-africa",
                },
                { name: "West Africa", href: "/where-we-work/west-africa" },
              ],
              href: "/where-we-work",
            },
            {
              name: "How We Work",
              links: [
                {
                  name: "Humanitarian Aid/Assistance",
                  href: "/how-we-work/humanitarian-aid",
                },
                {
                  name: "Long Term Development",
                  href: "/how-we-work/long-term-development",
                  links: [
                    {
                      name: "Thematic Areas",
                      href: "/how-we-work/long-term-development/thematic-areas",
                      links: [
                        {
                          name: "Habitat Preservation and Restoration",
                          href: "/how-we-work/long-term-development/thematic-areas/habitat-preservation",
                        },
                        {
                          name: "Species Conservation",
                          href: "/how-we-work/long-term-development/thematic-areas/species-conservation",
                        },
                        {
                          name: "Community Engagement and Education",
                          href: "/how-we-work/long-term-development/thematic-areas/community-engagement",
                        },
                        {
                          name: "Climate Change Mitigation and Adaptation",
                          href: "/how-we-work/long-term-development/thematic-areas/climate-change",
                        },
                        {
                          name: "Sustainable Use of Natural Resources",
                          href: "/how-we-work/long-term-development/thematic-areas/sustainable-use",
                        },
                        {
                          name: "Policy Advocacy and Governance",
                          href: "/how-we-work/long-term-development/thematic-areas/policy-advocacy",
                        },
                      ],
                    },
                    {
                      name: "Guiding Principles",
                      href: "/how-we-work/long-term-development/guiding-principles",
                    },
                  ],
                },
                {
                  name: "Policy Advocacy and Governance",
                  href: "/how-we-work/policy-governance",
                },
                {
                  name: "Donors & Partners",
                  href: "/how-we-work/donors-partners",
                },
                {
                  name: "Quality Assurance",
                  href: "/how-we-work/quality-assurance",
                },
              ],
              href: "/how-we-work",
            },
            {
              name: "News & Publications",
              links: [
                {
                  name: "Reports",
                  href: "/publications/reports",
                  links: [
                    {
                      name: "Annual Reports",
                      href: "/publications/reports/annual-reports",
                    },
                    {
                      name: "Framework Agreement with XYZ",
                      href: "/publications/reports/framework-agreement",
                    },
                    {
                      name: "Individual Donors",
                      href: "/publications/reports/individual-donors",
                    },
                    {
                      name: "Banking Information",
                      href: "/publications/reports/banking-information",
                    },
                  ],
                },
                { name: "Newsroom", href: "/newsroom" },
                { name: "Single News", href: "/single-news" },
                {
                  name: "Publications",
                  href: "publications",
                },
              ],
              href: "/publications",
            },
          ].map((item, index) => (
            <li key={item.name}>
              <a
                className="main-nav__menu_link"
                href={item.href}
                onClick={() => toggleMenu(index)}
              >
                {item.name}{" "}
                <i
                  className={`fas fa-chevron-${
                    activeMenu === index ? "up" : "down"
                  }`}
                ></i>
              </a>
              {item.links && (
                <ul
                  className={`dropdown-menu ${
                    activeMenu === index ? "active" : ""
                  }`}
                >
                  {item.links.map((link) => (
                    <li key={link.name} className="dropdown-menu__item">
                      <a className="dropdown-menu__item_link" href={link.href}>
                        {link.name}
                      </a>
                      {link.links && (
                        <ul className="dropdown-menu">
                          {link.links.map((subLink) => (
                            <li
                              key={subLink.name}
                              className="dropdown-menu__item"
                            >
                              <a
                                className="dropdown-menu__item_link"
                                href={subLink.href}
                              >
                                {subLink.name}
                              </a>
                            </li>
                          ))}
                        </ul>
                      )}
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
        <ul>
          <li className="main-nav__contact">
            <a href="/contact-us">Contact Us</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;

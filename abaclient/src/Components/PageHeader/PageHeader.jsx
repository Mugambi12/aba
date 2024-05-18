import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "./PageHeader.css";

const PageHeader = ({ backgroundImage, title, focus }) => {
  return (
    <div className="page-header">
      <div className="page-header-overlay"></div>
      <img
        className="page-header-image"
        src={backgroundImage}
        alt="Background"
      />
      <div className="page-header-titles">
        <div className="page-header-title">{title}</div>
        <div className="page-header-subtitle">
          <Link to="/">
            <span>Home</span>
            <i className="fas fa-chevron-right"></i>
          </Link>
          <span className="subtitle-text">{focus}</span>
        </div>
      </div>
    </div>
  );
};

PageHeader.propTypes = {
  title: PropTypes.string.isRequired,
  focus: PropTypes.string.isRequired,
  backgroundImage: PropTypes.string.isRequired,
};

export default PageHeader;

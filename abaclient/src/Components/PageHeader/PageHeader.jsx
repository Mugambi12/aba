import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "./PageHeader.css";

const PageHeader = ({ headerData }) => {
  return (
    <div className="page-header">
      <div className="page-header-overlay"></div>
      <img
        className="page-header-image"
        src={headerData.BgImg}
        alt="Background"
      />
      <div className="page-header-titles">
        <div className="page-header-title">{headerData.title}</div>
        <div className="page-header-subtitle">
          <Link to="/">
            <span>Home</span>
            <i className="fas fa-chevron-right"></i>
          </Link>
          <span className="subtitle-text">{headerData.focus}</span>
        </div>
      </div>
    </div>
  );
};

PageHeader.propTypes = {
  headerData: PropTypes.shape({
    title: PropTypes.string.isRequired,
    focus: PropTypes.string.isRequired,
    BgImg: PropTypes.string.isRequired,
  }).isRequired,
};

export default PageHeader;

import React from "react";
import "./Footer.css";

const Footer = () => {
  const year = new Date().getFullYear();
  const month = new Date().toLocaleString("default", { month: "long" });

  return (
    <div className="footer">
      <p>
        @ {year} {month} ABA. All rights reserved.
      </p>
      <ul>
        <li>Terms of services</li>
        <li>Privacy Policy</li>
        <li>Cookie Policy</li>
      </ul>
    </div>
  );
};

export default Footer;

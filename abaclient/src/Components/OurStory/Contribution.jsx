import React from "react";
import checkmark from "../../assets/checkmark.png";
import heroImage from "../../assets/images/hero.png";
import "./Contribution.css";

const Contribution = () => {
  const backgroundImageUrl =
    "https://images.pexels.com/photos/5229543/pexels-photo-5229543.jpeg?auto=compress&cs=tinysrgb&w=600";

  return (
    <section className="contribution-container">
      <div className="background-overlay"></div>
      <img
        className="background-image"
        src={heroImage}
        alt="background image"
      />

      <div className="contribution-details">
        <div className="text-container">
          <img className="checkmark" src={checkmark} alt="checkmark" />
          <h2 className="title">
            Take the right step,
            <br />
            <span className="subtitle">do the big things.</span>
          </h2>
        </div>

        <div className="contribution-stats">
          <Stat number={52} label="Cases Solved" />
          <Stat number={164} label="Trained Experts" />
          <Stat number={38} label="Branches" />
          <Stat number={100} label="Satisfied Clients" />
        </div>
      </div>
    </section>
  );
};

const Stat = ({ number, label }) => (
  <div className="stat">
    <div className="number" data-countup={`{"endValue":${number}}`}>
      {number}
    </div>
    <h6 className="label">{label}</h6>
  </div>
);

export default Contribution;

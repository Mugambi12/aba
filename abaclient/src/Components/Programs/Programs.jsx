import React from "react";
import "./Programs.css";
import program1 from "../../assets/images/program-1.png";
import program2 from "../../assets/images/program-2.png";
import program3 from "../../assets/images/program-3.png";
import programIcon1 from "../../assets/images/program-icon-1.png";
import programIcon2 from "../../assets/images/program-icon-2.png";
import programIcon3 from "../../assets/images/program-icon-3.png";

const Programs = () => {
  return (
    <div className="container">
      {/*
      <div className="programs-container">
        <div className="program-item primary">
          <img src={program1} alt="Biodiversity Conservation" />
          <div className="caption">
            <img src={programIcon1} alt="" />
            <p>Biodiversity Conservation</p>
          </div>
        </div>
        <div className="program-item primary">
          <img src={program2} alt="Climate Change" />
          <div className="caption">
            <img src={programIcon2} alt="" />
            <p>Climate Change</p>
          </div>
        </div>
      </div>*/}

      <div className="programs-container">
        <div className="program-item secondary">
          <img src={program3} alt="Youth Culture and Biodiversity" />
          <div className="caption">
            <img src={programIcon3} alt="" />
            <p>Youth Culture and Biodiversity</p>
          </div>
        </div>
        <div className="program-item secondary">
          <img src={program1} alt="Ecosystem Restoration" />
          <div className="caption">
            <img src={programIcon1} alt="" />
            <p>Ecosystem Restoration</p>
          </div>
        </div>
        <div className="program-item secondary">
          <img src={program2} alt="Sustainable Development" />
          <div className="caption">
            <img src={programIcon2} alt="" />
            <p>Sustainable Development</p>
          </div>
        </div>
        <div className="program-item secondary">
          <img src={program3} alt="Wildlife Protection" />
          <div className="caption">
            <img src={programIcon3} alt="" />
            <p>Wildlife Protection</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Programs;

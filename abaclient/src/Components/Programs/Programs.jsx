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
          <img
            src="https://media.istockphoto.com/id/538889138/photo/african-woman-laughing.jpg?b=1&s=612x612&w=0&k=20&c=Vd03spfB4gxELYs-aTx1cv8i91OKnFgeuD3You1ekFM="
            alt="Youth Culture and Biodiversity"
          />
          <div className="caption">
            <img src={programIcon3} alt="" />
            <p>Youth Culture and Biodiversity</p>
          </div>
        </div>
        <div className="program-item secondary">
          <img
            /*
            src="https://media.istockphoto.com/id/1389848477/photo/shot-of-a-farmer-standing-on-a-field.jpg?b=1&s=612x612&w=0&k=20&c=QZK6m1xEG88wewiWffgnFqlf9H_dD4rC1NmRJ-TysiA="
            alt="Ecosystem Restoration"*/
            src="https://images.pexels.com/photos/8948347/pexels-photo-8948347.jpeg?auto=compress&cs=tinysrgb&w=600"
          />
          <div className="caption">
            <img src={programIcon1} alt="" />
            <p>Ecosystem Restoration</p>
          </div>
        </div>
        <div className="program-item secondary">
          <img
            src="https://images.pexels.com/photos/18161318/pexels-photo-18161318/free-photo-of-elephant-in-a-jungle.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="Sustainable Development"
          />
          <div className="caption">
            <img src={programIcon2} alt="" />
            <p>Sustainable Development</p>
          </div>
        </div>
        <div className="program-item secondary">
          <img
            src="https://images.pexels.com/photos/5529604/pexels-photo-5529604.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="Wildlife Protection"
          />
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

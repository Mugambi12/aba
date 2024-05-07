import React, { useState } from "react";
import "./Testimonials.css";
import next_icon from "../../assets/images/next-icon.png";
import prev_icon from "../../assets/images/prev-icon.png";
import user_1 from "../../assets/images/user-1.png";
import user_2 from "../../assets/images/user-2.png";
import user_3 from "../../assets/images/user-3.png";
import user_4 from "../../assets/images/user-4.png";
import user_5 from "../../assets/images/user-5.png";
import user_6 from "../../assets/images/user-6.png";

const Testimonials = () => {
  const slideForward = () => {
    const slider = document.querySelector(".slider ul");
    const firstSlide = document.querySelector(".slider ul li");
    const slideWidth = firstSlide.clientWidth;
    slider.style.transition = "transform 0.5s ease-in-out";
    slider.style.transform = `translateX(-${slideWidth}px)`;
    slider.appendChild(firstSlide);
  };

  const slideBackward = () => {
    const slider = document.querySelector(".slider ul");
    const lastSlide = document.querySelector(".slider ul li:last-child");
    const slideWidth = lastSlide.clientWidth;
    slider.style.transition = "transform 0.5s ease-in-out";
    slider.style.transform = `translateX(-${slideWidth}px)`;
    slider.insertBefore(lastSlide, slider.firstChild);
  };

  return (
    <div className="testimonials">
      <img
        src={next_icon}
        alt="next"
        className="next-btn"
        onClick={slideForward}
      />
      <img
        src={prev_icon}
        alt="previous"
        className="prev-btn"
        onClick={slideBackward}
      />

      <div className="slider">
        <ul>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_1} alt="Mary Wambui" />
                <div>
                  <h3>Mary Wambui</h3>
                  <p>Community Leader, Kenya</p>
                </div>
              </div>
              <p>
                "Thanks to the NGO's efforts, our village now enjoys clean water
                and thriving wildlife. Our children are learning the value of
                conservation."
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_2} alt="James Kamau" />
                <div>
                  <h3>James Kamau</h3>
                  <p>Farmer, Tanzania</p>
                </div>
              </div>
              <p>
                "The NGO's training has taught us sustainable farming practices
                that have improved our yields and protected local biodiversity."
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_3} alt="Fatima Ahmed" />
                <div>
                  <h3>Fatima Ahmed</h3>
                  <p>Teacher, Ghana</p>
                </div>
              </div>
              <p>
                "Our school garden initiative, supported by the NGO, has helped
                students learn about biodiversity firsthand while providing
                fresh produce for our community."
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_4} alt="Kwame Asante" />
                <div>
                  <h3>Kwame Asante</h3>
                  <p>Environmental Scientist, Nigeria</p>
                </div>
              </div>
              <p>
                "The NGO's research initiatives have given us invaluable data on
                wildlife populations, helping us develop more effective
                conservation strategies."
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_5} alt="Zainab Ali" />
                <div>
                  <h3>Zainab Ali</h3>
                  <p>Student, South Africa</p>
                </div>
              </div>
              <p>
                "The NGO's educational programs on environmental conservation
                have inspired me and my classmates to take action in protecting
                our local ecosystems."
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_6} alt="Musa Ndong" />
                <div>
                  <h3>Musa Ndong</h3>
                  <p>Local Business Owner, Senegal</p>
                </div>
              </div>
              <p>
                "The NGO's work in restoring mangroves has not only improved the
                environment but also boosted local businesses by providing new
                opportunities for sustainable tourism."
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Testimonials;

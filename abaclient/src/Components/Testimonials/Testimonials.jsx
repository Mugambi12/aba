import React, { useState } from "react";
import "./Testimonials.css";
import next_icon from "../../assets/images/next-icon.png";
import prev_icon from "../../assets/images/prev-icon.png";
import user_1 from "../../assets/images/user-1.png";
import user_2 from "../../assets/images/user-2.png";
import user_3 from "../../assets/images/user-3.png";
import user_4 from "../../assets/images/user-4.png";

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
                <img src={user_1} alt="" />
                <div>
                  <h3>John Doe</h3>
                  <p>CEO, Company</p>
                </div>
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Expedita aliquam voluptates neque fugiat minus reiciendis.
                Voluptas sapiente minus iusto, inventore reiciendis sunt eos
                eligendi quis est modi placeat at hic!
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_2} alt="" />
                <div>
                  <h3>John Doe</h3>
                  <p>CEO, Company</p>
                </div>
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Expedita aliquam voluptates neque fugiat minus reiciendis.
                Voluptas sapiente minus iusto, inventore reiciendis sunt eos
                eligendi quis est modi placeat at hic!
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_3} alt="" />
                <div>
                  <h3>John Doe</h3>
                  <p>CEO, Company</p>
                </div>
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Expedita aliquam voluptates neque fugiat minus reiciendis.
                Voluptas sapiente minus iusto, inventore reiciendis sunt eos
                eligendi quis est modi placeat at hic!
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_4} alt="" />
                <div>
                  <h3>John Doe</h3>
                  <p>CEO, Company</p>
                </div>
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Expedita aliquam voluptates neque fugiat minus reiciendis.
                Voluptas sapiente minus iusto, inventore reiciendis sunt eos
                eligendi quis est modi placeat at hic!
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Testimonials;

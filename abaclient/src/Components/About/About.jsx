import React from "react";
import "./About.css";
import play_icon from "../../assets/images/play-icon.png";

const About = ({ setVideoPlayerState }) => {
  return (
    <div className="about">
      <div className="about-left">
        <img
          src="https://images.pexels.com/photos/7944396/pexels-photo-7944396.jpeg?auto=compress&cs=tinysrgb&w=100dvh&h=100dvh&fit=crop&crop=entropy&ar=1:1&fm=jpg"
          className="about-img"
          alt="About us image"
        />
        <img
          src={play_icon}
          className="play-icon"
          alt=""
          onClick={() => {
            setVideoPlayerState(true);
          }}
        />
      </div>

      <div className="about-right">
        <h3>About ABA</h3>
        <h2>Your trusted partner in innovative solutions</h2>
        <p>
          We are a global company that provides a variety of services and
          solutions to our clients. We are committed to providing innovative
          solutions that help our clients achieve their goals.
        </p>
        <p>
          Our team of experts is dedicated to providing the highest level of
          service and support to our clients. We work closely with our clients
          to understand their needs and develop customized solutions that meet
          their specific requirements.
        </p>
        <p>
          Our commitment to excellence and innovation has made us a trusted
          partner for businesses around the world. We are proud to be a leader
          in our industry and look forward to helping our clients achieve
          success.
        </p>
      </div>
    </div>
  );
};

export default About;

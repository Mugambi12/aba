import { useState, useEffect } from "react";
import "./HeroBackground.css";
import video1 from "../../assets/video/video1.mp4";
import arrow_btn from "../../assets/arrow_btn.png";
import play_icon from "../../assets/play_icon.png";
import pause_icon from "../../assets/pause_icon.png";

const HeroBackground = () => {
  const image1 =
    "https://images.pexels.com/photos/12833512/pexels-photo-12833512.jpeg?auto=compress&cs=tinysrgb&w=100dvh&h=100dvh&fit=crop&crop=entropy&ar=3:2&fm=jpg";
  const image2 =
    "https://images.pexels.com/photos/11601393/pexels-photo-11601393.jpeg?auto=compress&cs=tinysrgb&w=100dvh&h=100dvh&fit=crop&crop=entropy&ar=3:2&fm=jpg";
  const image3 =
    "https://images.pexels.com/photos/60013/desert-drought-dehydrated-clay-soil-60013.jpeg?auto=compress&cs=tinysrgb&w=100dvh&h=100dvh&fit=crop&crop=entropy&ar=3:2&fm=jpg";

  const [playStatus, setPlayStatus] = useState(false);
  const [heroCount, setHeroCount] = useState(0);
  const [heroData, setHeroData] = useState([
    {
      title: "Welcome to ABA",
      subtitle: "Your trusted partner in innovative solutions",
      image: image1,
    },
    {
      title: "Client Portal",
      subtitle: "Access your account and manage services with ease",
      image: image2,
    },
    {
      title: "Biodiversity",
      subtitle: "Discover our commitment to preserving the environment",
      image: image3,
    },
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      setHeroCount((prevCount) => (prevCount + 1) % 3);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const togglePlayStatus = () => {
    setPlayStatus(!playStatus);
  };

  const nextHero = () => {
    setHeroCount((prevCount) => (prevCount + 1) % 3);
  };

  const renderBackground = () => {
    return playStatus ? (
      <video className="background" autoPlay loop muted>
        <source src={video1} type="video/mp4" />
      </video>
    ) : (
      <img
        src={heroData[heroCount].image}
        className="background"
        alt="background"
      />
    );
  };

  return (
    <div className="hero-background">
      <div className="hero-background-overlay"></div>
      {renderBackground()}
      <div className="hero">
        <div className="hero-content">
          <div className="hero-text">
            <p className="hero-title">{heroData[heroCount].title}</p>
            <p className="hero-subtitle">{heroData[heroCount].subtitle}</p>
          </div>

          <div className="hero-explore" onClick={nextHero}>
            <p>Explore the features</p>
            <img src={arrow_btn} alt="Arrow button" />
          </div>

          <div className="hero-dot-play">
            <ul className="hero-dots">
              {[0, 1, 2].map((index) => (
                <li
                  key={index}
                  className={`hero-dot ${heroCount === index ? "orange" : ""}`}
                  onClick={() => setHeroCount(index)}
                />
              ))}
            </ul>

            <div className="hero-play" onClick={togglePlayStatus}>
              <img
                src={playStatus ? pause_icon : play_icon}
                alt={playStatus ? "Pause icon" : "Play icon"}
              />
              <p>{playStatus ? "Pause Video" : "Play Video"}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroBackground;

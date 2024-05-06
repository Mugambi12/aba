import "./Hero.css";
import arrow_btn from "../../assets/arrow_btn.png";
import play_icon from "../../assets/play_icon.png";
import pause_icon from "../../assets/pause_icon.png";

const Hero = ({
  heroData,
  heroCount,
  setHeroCount,
  setPlayStatus,
  playStatus,
}) => (
  <div className="hero">
    <div className="hero-text">
      <p className="hero-title">{heroData.title}</p>
      <p className="hero-subtitle">{heroData.subtitle}</p>
    </div>

    <div
      className="hero-explore"
      onClick={() => setHeroCount((prevCount) => (prevCount + 1) % 3)}
    >
      <p>Explore the features</p>
      <img src={arrow_btn} alt="Arrow button" />
    </div>

    <div className="hero-dot-play">
      <ul className="hero-dots">
        {Array.from({ length: 3 }, (_, index) => (
          <li
            key={index}
            onClick={() => setHeroCount(index)}
            className={`hero-dot ${heroCount === index ? "orange" : ""}`}
          />
        ))}
      </ul>

      <div className="hero-play">
        <img
          src={playStatus ? pause_icon : play_icon}
          alt={playStatus ? "Pause icon" : "Play icon"}
          onClick={() => setPlayStatus(!playStatus)}
          aria-label={playStatus ? "Pause video" : "Play video"}
        />
        <p>See the video</p>
      </div>
    </div>
  </div>
);

export default Hero;

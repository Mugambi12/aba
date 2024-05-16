import "./HeroBackground.css";
import video1 from "../../assets/video/video1.mp4";
import image1 from "../../assets/image1.png";
import image2 from "../../assets/image2.png";
import image3 from "../../assets/image3.png";
import arrow_btn from "../../assets/arrow_btn.png";
import play_icon from "../../assets/play_icon.png";
import pause_icon from "../../assets/pause_icon.png";

const HeroBackground = ({
  playStatus,
  heroCount,
  fade,
  heroData,
  setHeroCount,
  setPlayStatus,
}) => {
  const fadeClass = fade ? "fade-in" : "";

  const renderBackground = () => {
    if (playStatus) {
      return (
        <video className={`background ${fadeClass}`} autoPlay loop muted>
          <source src={video1} type="video/mp4" />
        </video>
      );
    }

    const images = [image1, image2, image3];
    return (
      <img
        src={images[heroCount]}
        className={`background ${fadeClass}`}
        alt="background"
      />
    );
  };

  return (
    <div className="hero-background">
      {renderBackground()}
      <div className="hero">
        <div className={`hero-text ${fadeClass}`}>
          <p className="hero-title">{heroData.title}</p>
          <p className="hero-subtitle">{heroData.subtitle}</p>
        </div>

        <div
          className={`hero-explore ${fadeClass}`}
          onClick={() => setHeroCount((prevCount) => (prevCount + 1) % 3)}
        >
          <p>Explore the features</p>
          <img src={arrow_btn} alt="Arrow button" />
        </div>

        <div className="hero-dot-play">
          <ul className={`hero-dots ${fadeClass}`}>
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
    </div>
  );
};

export default HeroBackground;

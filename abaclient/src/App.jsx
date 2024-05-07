import { useEffect, useState } from "react";
import Background from "./Components/Background/Background";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import Title from "./Components/Title/Title";
import Programs from "./Components/Programs/Programs";
import About from "./Components/About/About";
import Testimonials from "./Components/Testimonials/Testimonials";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import Media from "./Components/Media/Media";
import VideoPlayer from "./Components/Testimonials/VideoPlayer";

const App = () => {
  const heroData = [
    {
      title: "Welcome to ABA",
      subtitle: "Your trusted partner in innovative solutions",
    },
    {
      title: "Client Portal",
      subtitle: "Access your account and manage services with ease",
    },
    {
      title: "Biodiversity",
      subtitle: "Discover our commitment to preserving the environment",
    },
  ];

  const [heroCount, setHeroCount] = useState(0);
  const [playStatus, setPlayStatus] = useState(false);
  const [fade, setFade] = useState(false);
  const [videoPlayerState, setVideoPlayerState] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setHeroCount((count) => (count === 2 ? 0 : count + 1));
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    setFade(true);
    const timer = setTimeout(() => setFade(false), 600);

    return () => clearTimeout(timer);
  }, [heroCount]);

  return (
    <div>
      <Background playStatus={playStatus} heroCount={heroCount} fade={fade} />
      <Navbar />
      <Hero
        setHeroCount={setHeroCount}
        heroCount={heroCount}
        setPlayStatus={setPlayStatus}
        playStatus={playStatus}
        heroData={heroData[heroCount]}
        fade={fade}
      />

      <div className="home-section">
        <Title title="Our Program" subtitle="What We Offer" />
        <Programs />
        <About setVideoPlayerState={setVideoPlayerState} />

        <Title
          title="Latest News & Insights"
          subtitle="Stay updated with our latest stories and publications"
        />
        <Media />

        <Title title="Our Focus" subtitle="Thematic Areas" />

        <Title
          title="Testimonials"
          subtitle="Voices from Our Conservation Efforts"
        />
        <Testimonials />

        <Title title="Contact Us" subtitle="Get in Touch" />
        <Contact />

        <Footer />
      </div>

      <VideoPlayer
        videoPlayerState={videoPlayerState}
        setVideoPlayerState={setVideoPlayerState}
      />
    </div>
  );
};

export default App;

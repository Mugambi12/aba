import { useEffect, useState } from "react";
import Background from "./Components/Header/Background/Background";
import Navbar from "./Components/Header/Navbar/Navbar";
import Hero from "./Components/Header/Hero/Hero";
import Title from "./Components/Title/Title";
import Programs from "./Components/Programs/Programs";
import About from "./Components/About/About";
import Testimonials from "./Components/Testimonials/Testimonials";

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
      <div className="home-section">
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
      </div>

      <div className="program-section">
        <Title title="Our Program" subtitle="What We Offer" />
        <Programs />
        <About />
      </div>

      <div className="our-focus-section">
        <Title title="Our Focus" subtitle="Thematic Areas" />
      </div>

      <div className="testimonials-section">
        <Title title="Testimonials" subtitle="What Our Clients Say" />
        <Testimonials />
      </div>
    </div>
  );
};

export default App;

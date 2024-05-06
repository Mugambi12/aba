import { useEffect, useState } from "react";
import Background from "./Components/Background/Background";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";

const Header = () => {
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
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    setFade(true);
    const timer = setTimeout(() => setFade(false), 1000);

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
    </div>
  );
};

export default Header;

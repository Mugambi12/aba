import { useEffect, useRef, useState } from "react";

import Background from "../Components/Background/Background";
import Navbar from "../Components/Navbar/Navbar";
import Hero from "../Components/Hero/Hero";
import Title from "../Components/Title/Title";
import Programs from "../Components/Programs/Programs";
import About from "../Components/About/About";
import Testimonials from "../Components/Testimonials/Testimonials";
import Contact from "../Components/Contact/Contact";
import Footer from "../Components/Footer/Footer";
import SocialMedia from "../Components/SocialMedia/SocialMedia";
import VideoPlayer from "../Components/VideoPlayer/VideoPlayer";

import Header from "../Components/NewsRoom/Header/Header";
import News from "../Components/NewsRoom/News/News";
import Sidebar from "../Components/NewsRoom/Sidebar/Sidebar";
import SinglePost from "../Components/NewsRoom/SinglePost/SinglePost";
import Auth from "../Components/Auth/Auth";

const Home = () => {
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
    <>
      <Background playStatus={playStatus} heroCount={heroCount} fade={fade} />
      <Navbar videoPlayerState={videoPlayerState} />
      <Hero
        setHeroCount={setHeroCount}
        heroCount={heroCount}
        setPlayStatus={setPlayStatus}
        playStatus={playStatus}
        heroData={heroData[heroCount]}
        fade={fade}
      />

      <Title title="Our Compaign" subtitle="What We Offer" />
      <Programs />
      <About setVideoPlayerState={setVideoPlayerState} />

      <div className="landing-page">
        <Header />
        <div className="posts-summary">
          <News />
          <Sidebar />
        </div>
      </div>

      <div className="article-page">
        <Header />
        <SinglePost />
      </div>

      <Title
        title="Latest News & Insights"
        subtitle="Stay updated with our latest stories and publications"
      />
      <SocialMedia />

      <Title title="Our Focus" subtitle="Thematic Areas" />

      <Title
        title="Testimonials"
        subtitle="Voices from Our Conservation Efforts"
      />
      <Testimonials />

      <Title title="Contact Us" subtitle="Get in Touch" />
      <Contact />

      <Footer />

      <VideoPlayer
        videoPlayerState={videoPlayerState}
        setVideoPlayerState={setVideoPlayerState}
      />
    </>
  );
};

export default Home;

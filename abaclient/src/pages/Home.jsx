import { useState } from "react";

import Navbar from "../Components/Navbar/Navbar";
import HeroBackground from "../Components/HeroBackground/HeroBackground";
import Title from "../Components/Title/Title";
import Programs from "../Components/OurStory/Programs";
import About from "../Components/OurStory/About";
import Testimonials from "../Components/Testimonials/Testimonials";
import Contact from "../Components/Contact/Contact";
import Footer from "../Components/Footer/Footer";
import SocialMedia from "../Components/SocialMedia/SocialMedia";
import VideoPlayer from "../Components/VideoPlayer/VideoPlayer";
import News from "../Components/NewsRoom/NewsRoom/NewsRoom";
import Sidebar from "../Components/NewsRoom/Sidebar/Sidebar";
import InlineContact from "../Components/Contact/InlineContact";

const HomePage = () => {
  const [videoPlayerState, setVideoPlayerState] = useState(false);

  return (
    <>
      <Navbar videoPlayerState={videoPlayerState} />
      <HeroBackground />

      <Title title="Our Compaign" subtitle="What We Offer" />
      <Programs />
      <About setVideoPlayerState={setVideoPlayerState} />

      <div className="landing-page">
        <Title
          title="Latest News"
          subtitle="Insights from Our Conservation Efforts"
        />
        <div className="posts-summary">
          <News />
          <Sidebar />
        </div>
      </div>

      <InlineContact />

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

export default HomePage;

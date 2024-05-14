import React, { useState } from "react";

import BackgroundImage from "../assets/image3.png";
import Contact from "../Components/Contact/Contact";
import Footer from "../Components/Footer/Footer";
import Navbar from "../Components/Navbar/Navbar";
import PageHeader from "../Components/PageHeader/PageHeader";
import Title from "../Components/Title/Title";
import InlineContact from "../Components/Contact/InlineContact";

const ContactPage = () => {
  const [videoPlayerState, setVideoPlayerState] = useState(false);

  return (
    <>
      <Navbar videoPlayerState={videoPlayerState} />
      <PageHeader
        backgroundImage={BackgroundImage}
        title="Contact"
        subtitle="Contact Us"
      />

      <InlineContact />

      <Title title="Contact Us" subtitle="Get in Touch" />
      <Contact />
      <Footer />
    </>
  );
};

export default ContactPage;

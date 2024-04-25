import React, { useEffect } from "react";
import { Container } from "react-bootstrap";
import GeneralAbout from "./GeneralAbout";
import OurStory from "./OurStory";
import VisionMission from "./VisionMission";
import OurHistory from "./OurHistory";
import Team from "./Team";
import Testimonials from "./Testimonials";

function About() {
  useEffect(() => {
    document.title = "About - ABA";
  }, []);

  return (
    <Container fluid>
      <GeneralAbout />
      <OurStory />
      <VisionMission />
      <OurHistory />
      <Team />
      <Testimonials />
    </Container>
  );
}

export default About;

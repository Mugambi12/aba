import React from "react";
import { Container } from "react-bootstrap";
import GeneralAbout from "./GeneralAbout";
import OurStory from "./OurStory";
import VisionMission from "./VisionMission";
import OurHistory from "./OurHistory";
import Team from "./Team";
import Testimonials from "./Testimonials";

function About() {
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

import Holder from "./Holder";

import React, { useEffect } from "react";
import { Container } from "react-bootstrap";
import LandingPage from "./LandingPage";
import WhatWeDo from "./WhatWeDo";
import LatestNews from "./LatestNews";

function Home() {
  useEffect(() => {
    document.title = "About - ABA";
  }, []);

  return (
    <Container fluid>
      <LandingPage />
      <WhatWeDo />
      <LatestNews />
      <Holder />
    </Container>
  );
}

export default Home;

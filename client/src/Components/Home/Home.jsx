import React, { useEffect } from "react";
import { Container } from "react-bootstrap";
import LandingPage from "./LandingPage";
import WhatWeDo from "./WhatWeDo";

import Holder from "./Holder";

function Home() {
  useEffect(() => {
    document.title = "About - ABA";
  }, []);

  return (
    <Container fluid>
      <LandingPage />
      <WhatWeDo />
      <Holder />
    </Container>
  );
}

export default Home;

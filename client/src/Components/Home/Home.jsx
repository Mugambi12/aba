import Holder from "./Holder";

import React, { useEffect } from "react";
import { Container } from "react-bootstrap";
import LandingPage from "./LandingPage";
import WhatWeDo from "./WhatWeDo";
import LatestNews from "./LatestNews";
import Users from "../API/Users";

function Home() {
  useEffect(() => {
    document.title = "Home - ABA";
  }, []);

  return (
    <Container fluid>
      <LandingPage />
      <Users />
      <WhatWeDo />
      <Holder />
      <LatestNews />
    </Container>
  );
}

export default Home;

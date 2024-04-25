import React, { useEffect } from "react";
import { Container } from "react-bootstrap";
import LandingPage from "./LandingPage";
import Holder from "./Holder";

function Home() {
  useEffect(() => {
    document.title = "About - ABA";
  }, []);

  return (
    <Container fluid>
      <LandingPage />
      <Holder />
    </Container>
  );
}

export default Home;

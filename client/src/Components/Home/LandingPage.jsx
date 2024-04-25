import React, { useEffect } from "react";
import { Container } from "react-bootstrap";
import CustomSwiperSlider from "./Swipper";

import backgroundImage from "../../assets/images/landing-page.jpg";
import first from "../../assets/images/github.png";
import second from "../../assets/images/linkedin.png";
import third from "../../assets/images/twitter.png";

const Background = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        width: "100%",
        height: "100vh",
        position: "absolute",
        top: 0,
        left: 0,
        zIndex: -1,
      }}
    ></div>
  );
};

function LandingPage() {
  useEffect(() => {
    document.title = "Home - ABA";
  }, []);

  const img1 = first;
  const img2 = second;
  const img3 = third;

  const images = [img1, img2, img3];

  return (
    <div style={{ height: "100vh" }}>
      <Background />
      <CustomSwiperSlider
        slideData={images}
        spaceBetween={50}
        slidesPerView={1}
        onSlideChange={() => console.log("Slide changed")}
        onSwiper={(swiper) => console.log(swiper)}
      />
    </div>
  );
}

export default LandingPage;

const BackgroundOverlay = () => {
  return (
    <div
      style={{
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        width: "100%",
        height: "100vh",
        position: "absolute",
        top: 0,
        left: 0,
        zIndex: -1,
      }}
    ></div>
  );
};

const ContentForBackground = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        zIndex: 0,
      }}
    >
      <Container className="text-center">
        <h1 className="display-1 text-white">Welcome to ABA</h1>
        <p className="lead text-white">
          ABA is a platform that allows you to search for books and authors
          easily.
        </p>
      </Container>
    </div>
  );
};

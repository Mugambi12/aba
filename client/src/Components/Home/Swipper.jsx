import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";

function CustomSwiperSlider(props) {
  const {
    spaceBetween = 50,
    slidesPerView = 3,
    onSlideChange = () => console.log("slide change"),
    onSwiper = (swiper) => console.log(swiper),
    slideData = [],
  } = props;

  return (
    <Swiper
      spaceBetween={spaceBetween}
      slidesPerView={slidesPerView}
      onSlideChange={onSlideChange}
      onSwiper={onSwiper}
    >
      {slideData.map((slide, index) => (
        <SwiperSlide key={index}>{slide}</SwiperSlide>
      ))}
    </Swiper>
  );
}

export default CustomSwiperSlider;

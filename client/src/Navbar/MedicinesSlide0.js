import React from "react";

import Card from "react-bootstrap/Card";
// import Button from "react-bootstrap/esm/Button";

import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, Autoplay, Virtual } from "swiper/core";
import "swiper/swiper-bundle.css";

import cardimge1 from "./images/full-width-2.webp";
import cardimge2 from "./images/full-width-3.webp";
import cardimge3 from "./images/full-width-4.webp";
import cardimge4 from "./images/full-width-1.webp";

SwiperCore.use([Navigation, Pagination, Autoplay, Virtual]);

const MedicinesSlide1 = () => {
  const slides = [];

  slides.push(
    <SwiperSlide>
      <Card>
        <div>
          <Card.Img src={cardimge1} style={{ backgroundColor: "#f7e8e6" }} />
        </div>
      </Card>
    </SwiperSlide>,
    <SwiperSlide>
      <Card>
        <div>
          <Card.Img src={cardimge2} style={{ backgroundColor: "#e4f2eb" }} />
        </div>
      </Card>
    </SwiperSlide>,
    <SwiperSlide>
      <Card>
        <div>
          <Card.Img src={cardimge3} style={{ backgroundColor: "#eeebf8" }} />
        </div>
      </Card>
    </SwiperSlide>,
    <SwiperSlide>
      <Card>
        <div>
          <Card.Img src={cardimge4} style={{ backgroundColor: "#e7f1f7" }} />
        </div>
      </Card>
    </SwiperSlide>
  );
  return (
    <div>
      <Swiper
        className="container"
        id="swiper"
        // virtual
        // slidesPerView={6}
        // slidesPerColumn={1}
        // slidesPerColumnFill="row"
        spaceBetween={30}
        // slidesPerGroup={2}
        // autoplay
        // loop
        breakpoints={{
          // Set different slide numbers for different screen sizes
          325: {
            slidesPerView: 1,
          },
          1024: {
            slidesPerView: 1,
          },
        }}
        onReachEnd={() => {
          console.log("reach end");
          const tmp = slides.unshift();
          slides.push(tmp);
        }}
        navigation
        pagination
      >
        {slides}
      </Swiper>
    </div>
  );
};

export default MedicinesSlide1;

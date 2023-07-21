import React from "react";

import Card from "react-bootstrap/Card";
// import Button from "react-bootstrap/esm/Button";

import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, Autoplay, Virtual } from "swiper/core";
import "swiper/swiper-bundle.css";

import cardimge1 from "./images/h-c-5.webp";
import cardimge2 from "./images/h-c-6.webp";
import cardimge3 from "./images/h-c-7.webp";
import cardimge4 from "./images/h-c-4.webp";
import cardimge5 from "./images/h-c-2.webp";
import cardimge6 from "./images/h-c-3.webp";
import cardimge7 from "./images/h-c-1.webp";

SwiperCore.use([Navigation, Pagination, Autoplay, Virtual]);

const MedicinesSlide1 = () => {
  const slides = [];

  slides.push(
    <SwiperSlide>
      <Card style={{ width: "300px", height: "200px" }}>
        <div className="d-flex justify-content-between">
          <div>
            <Card.Img src={cardimge1} alt="" />
          </div>
        </div>
      </Card>
    </SwiperSlide>,
    <SwiperSlide>
      <Card style={{ width: "300px", height: "200px" }}>
        <div className="d-flex justify-content-between">
          <div>
            <Card.Img src={cardimge2} alt="" />
          </div>
        </div>
      </Card>
    </SwiperSlide>,
    <SwiperSlide>
      <Card style={{ width: "300px", height: "200px" }}>
        <div className="d-flex justify-content-between">
          <div>
            <Card.Img src={cardimge3} alt="" />
          </div>
        </div>
      </Card>
    </SwiperSlide>,
    <SwiperSlide>
      <Card style={{ width: "300px", height: "200px" }}>
        <div className="d-flex justify-content-between">
          <div>
            <Card.Img src={cardimge4} alt="" />
          </div>
        </div>
      </Card>
    </SwiperSlide>,
    <SwiperSlide>
      <Card style={{ width: "300px", height: "200px" }}>
        <div className="d-flex justify-content-between">
          <div>
            <Card.Img src={cardimge5} alt="" />
          </div>
        </div>
      </Card>
    </SwiperSlide>,
    <SwiperSlide>
      <Card style={{ width: "300px", height: "200px" }}>
        <div className="d-flex justify-content-between">
          <div>
            <Card.Img src={cardimge6} alt="" />
          </div>
        </div>
      </Card>
    </SwiperSlide>,
    <SwiperSlide>
      <Card style={{ width: "300px", height: "200px" }}>
        <div className="d-flex justify-content-between">
          <div>
            <Card.Img src={cardimge7} alt="" />
          </div>
        </div>
      </Card>
    </SwiperSlide>
  );
  return (
    <div>
      <p className=" container text-start mb-5">Health condition</p>
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
            slidesPerView: 4,
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

import React from "react";

import Card from "react-bootstrap/Card";
// import Button from "react-bootstrap/esm/Button";

import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, Autoplay, Virtual } from "swiper/core";
import "swiper/swiper-bundle.css";

import cardimge1 from "./images/cat-2.webp";
import cardimge2 from "./images/cat-6.webp";
import cardimge3 from "./images/cat-9.webp";
import cardimge4 from "./images/cat-8.webp";
import cardimge5 from "./images/cat-7.webp";
import cardimge6 from "./images/cat-1.webp";
import cardimge7 from "./images/cat-3.webp";
import cardimge8 from "./images/cat-4.webp";
import cardimge9 from "./images/cat-5.webp";
SwiperCore.use([Navigation, Pagination, Autoplay, Virtual]);

const MedicinesSlide2 = () => {
  const slides = [];

  slides.push(
    <SwiperSlide>
      <Card style={{ width: "300px", height: "200px" }}>
        <div className="d-flex justify-content-between">
          <div>
            <Card.Img src={cardimge1} />
          </div>
        </div>
      </Card>
    </SwiperSlide>,
    <SwiperSlide>
      <Card style={{ width: "300px", height: "200px" }}>
        <div className="d-flex justify-content-between">
          <div>
            <Card.Img src={cardimge2} />
          </div>
        </div>
      </Card>
    </SwiperSlide>,
    <SwiperSlide>
      <Card style={{ width: "300px", height: "200px" }}>
        <div className="d-flex justify-content-between">
          <div>
            <Card.Img src={cardimge3} />
          </div>
        </div>
      </Card>
    </SwiperSlide>,
    <SwiperSlide>
      <Card style={{ width: "300px", height: "200px" }}>
        <div className="d-flex justify-content-between">
          <div>
            <Card.Img src={cardimge4} />
          </div>
        </div>
      </Card>
    </SwiperSlide>,
    <SwiperSlide>
      <Card style={{ width: "300px", height: "200px" }}>
        <div className="d-flex justify-content-between">
          <div>
            <Card.Img src={cardimge5} />
          </div>
        </div>
      </Card>
    </SwiperSlide>,
    <SwiperSlide>
      <Card style={{ width: "300px", height: "200px" }}>
        <div className="d-flex justify-content-between">
          <div>
            <Card.Img src={cardimge6} />
          </div>
        </div>
      </Card>
    </SwiperSlide>,
    <SwiperSlide>
      <Card style={{ width: "300px", height: "200px" }}>
        <div className="d-flex justify-content-between">
          <div>
            <Card.Img src={cardimge7} />
          </div>
        </div>
      </Card>
    </SwiperSlide>,
    <SwiperSlide>
      <Card style={{ width: "300px", height: "200px" }}>
        <div className="d-flex justify-content-between">
          <div>
            <Card.Img src={cardimge8} />
          </div>
        </div>
      </Card>
    </SwiperSlide>,
    <SwiperSlide>
      <Card style={{ width: "300px", height: "200px" }}>
        <div className="d-flex justify-content-between">
          <div>
            <Card.Img src={cardimge9} />
          </div>
        </div>
      </Card>
    </SwiperSlide>
  );
  return (
    <div>
      <p className=" container text-start mb-5">Categories</p>
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

export default MedicinesSlide2;

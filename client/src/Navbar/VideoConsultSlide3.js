import React from "react";
import "./VideoConsultSlide3.css";
import Card from "react-bootstrap/Card";
// import Button from "react-bootstrap/esm/Button";

import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, Autoplay, Virtual } from "swiper/core";
import "swiper/swiper-bundle.css";

import cardimge1 from "./images/offer-plus-plan-v2.png";
import cardimge2 from "./images/offer-app-v1.png";
import cardimge3 from "./images/performance-issues-bed-v1.jpg";

SwiperCore.use([Navigation, Pagination, Autoplay, Virtual]);

const VideoConsultSlide3 = () => {
  const slides = [];

  slides.push(
    <SwiperSlide>
      <Card style={{ width: "600px", height: "170px", backgroundColor: "#96d3bf" }}>
        <div className="d-flex justify-content-between">
          <div>
            <Card.Body>
              <Card.Title>
                <div style={{ backgroundColor: "white", width: "100px", color: "#96d3bf" }}>OFFER</div>{" "}
              </Card.Title>
              <h3>
                {" "}
                <Card.Text> Download the App & get &#8377;200 HealthCash </Card.Text>
              </h3>

              <a href="/#" className="text-dark text-decoration-none fs-5 fw-bold">
                Download App<i className="bi bi-chevron-right"></i>
              </a>
            </Card.Body>
          </div>
          <div>
            <Card.Img src={cardimge2} style={{ width: "120px", height: "120px" }} variant="bottom" />
          </div>
        </div>
      </Card>
    </SwiperSlide>,
    <SwiperSlide>
      <Card style={{ width: "600px", height: "170px", backgroundColor: "#fce5f4" }}>
        <div className="d-flex justify-content-between">
          <div>
            <Card.Body>
              <Card.Title>
                {" "}
                <div style={{ backgroundColor: "white", width: "200px", color: "#e72ea7" }}>PRACTO PLUS</div>{" "}
              </Card.Title>
              <h3>
                <Card.Text> Free online consultations starting at &#8377;799/month </Card.Text>
              </h3>

              <a href="/#" className="text-dark text-decoration-none fs-5 fw-bold">
                Get Membership <i className="bi bi-chevron-right"></i>
              </a>
            </Card.Body>
          </div>
          <div>
            <Card.Img src={cardimge1} style={{ width: "120px", height: "120px" }} variant="bottom" />
          </div>
        </div>
      </Card>
    </SwiperSlide>,
    <SwiperSlide>
      <Card style={{ width: "600px", height: "170px", backgroundColor: "#feba7f" }}>
        <div className="d-flex justify-content-between">
          <div>
            <Card.Body>
              <Card.Title>
                {" "}
                <div style={{ backgroundColor: "white", width: "100px", color: "#b05201" }}>OFFER</div>{" "}
              </Card.Title>
              <h3>
                <Card.Text> consult with specilalists at just &#8377;199 </Card.Text>
              </h3>

              <a href="/#" className="text-dark text-decoration-none fs-5 fw-bold">
                Consult Now <i className="bi bi-chevron-right"></i>
              </a>
            </Card.Body>
          </div>
          <div>
            <Card.Img src={cardimge3} style={{ width: "120px", height: "120px" }} variant="bottom" />
          </div>
        </div>
      </Card>
    </SwiperSlide>
  );
  return (
    <div className="container">
      <h2 className="text-start">Offers</h2>
      <Swiper
        className="container"
        id="swiper"
        // virtual
        // slidesPerView={6}
        // slidesPerColumn={1}
        // slidesPerColumnFill="row"
        spaceBetween={10}
        // slidesPerGroup={2}
        // autoplay
        // loop
        breakpoints={{
          // Set different slide numbers for different screen sizes
          325: {
            slidesPerView: 1,
          },
          1024: {
            slidesPerView: 2,
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

export default VideoConsultSlide3;

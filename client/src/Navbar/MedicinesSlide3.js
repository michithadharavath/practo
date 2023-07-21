import React from "react";
import "./VideoConsultSlide4.css";
import Card from "react-bootstrap/Card";
// import Button from "react-bootstrap/esm/Button";

import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, Autoplay, Virtual } from "swiper/core";
import "swiper/swiper-bundle.css";

import cardimge1 from "./images/dr-murali-reddy-61079374694e8.jpg";
import cardimge2 from "./images/dr-hitesh-viradiya-610d46ab0cf9b.jpg";
import cardimge3 from "./images/dr-rayees-ahmad-wani-5f5af3659d316.jpg";
import cardimge4 from "./images/dr-tariq-ahmad-bhat-621b6a0c5ab20.jpg";
import cardimge5 from "./images/dr-santosh-bhagwat-raut-64392a24a4cae.jpg";
import cardimge6 from "./images/dr-arpita-648d74eced5ea.jpg";
import cardimge7 from "./images/dr-tejashree-m-64704616d88ee.jpeg";
import cardimge8 from "./images/dr-shweta-vahile-640317b106787.jpeg";

SwiperCore.use([Navigation, Pagination, Autoplay, Virtual]);

const VideoConsultSlide4 = () => {
  const slides = [];

  slides.push(
    <SwiperSlide>
      <Card style={{ width: "300px", height: "130px" }}>
        <div className="d-flex justify-content-between">
          <div>
            <Card.Img src={cardimge1} style={{ width: "80px", height: "80px", borderRadius: "50%", margin: " 15px 5px auto" }} />
          </div>
          <div>
            <Card.Body>
              <Card.Title>
                <h6>Dr Murili Reddy</h6>{" "}
              </Card.Title>

              <p style={{ fontSize: "12px", lineHeight: "0" }}>Dermatology</p>
              <p style={{ fontSize: "12px", lineHeight: "0" }}>7 years Experience</p>
              <p style={{ fontSize: "12px", lineHeight: "0" }}>1105 consults done</p>
            </Card.Body>
          </div>
        </div>
      </Card>
    </SwiperSlide>,
    <SwiperSlide>
      <Card style={{ width: "300px", height: "130px" }}>
        <div className="d-flex justify-content-between">
          <div>
            <Card.Img src={cardimge2} style={{ width: "80px", height: "80px", borderRadius: "50%", margin: " 15px 5px auto" }} variant="bottom" />
          </div>
          <div>
            <Card.Body>
              <Card.Title>
                <h6>Dr. Hitesh Viradiya</h6>{" "}
              </Card.Title>

              <p style={{ fontSize: "12px" }}>Dermatologist, Cosmetologist, Hair Transplant Surgeon</p>
              <p style={{ fontSize: "12px", lineHeight: "0" }}>8 years Experience</p>
              <p style={{ fontSize: "12px", lineHeight: "0" }}>24442 consults done</p>
            </Card.Body>
          </div>
        </div>
      </Card>
    </SwiperSlide>,
    <SwiperSlide>
      <Card style={{ width: "300px", height: "130px" }}>
        <div className="d-flex justify-content-between">
          <div>
            <Card.Img src={cardimge3} style={{ width: "80px", height: "80px", borderRadius: "50%", margin: " 15px 5px auto" }} variant="bottom" />
          </div>
          <div>
            <Card.Body>
              <Card.Title>
                <h6>Dr. Rayees Ahmad Wani</h6>{" "}
              </Card.Title>
              <p style={{ fontSize: "12px" }}>Neuropsychiatrist, Addiction Psychiatrist, Sexologist</p>
              <p style={{ fontSize: "12px", lineHeight: "0" }}>13 years Experience</p>
              <p style={{ fontSize: "12px", lineHeight: "0" }}>47430 consults done</p>
            </Card.Body>
          </div>
        </div>
      </Card>
    </SwiperSlide>,
    <SwiperSlide>
      <Card style={{ width: "300px", height: "130px" }}>
        <div className="d-flex justify-content-between">
          <div>
            <Card.Img src={cardimge4} style={{ width: "80px", height: "80px", borderRadius: "50%", margin: " 15px 5px auto" }} variant="bottom" />
          </div>
          <div>
            <Card.Body>
              <Card.Title>
                <h6>Dr. Tariq Ahmad Bhat</h6>{" "}
              </Card.Title>

              <p style={{ fontSize: "12px", lineHeight: "0" }}>Sexologist</p>
              <p style={{ fontSize: "12px", lineHeight: "0" }}>11 years Experience</p>
              <p style={{ fontSize: "12px", lineHeight: "0" }}>1105 consults done</p>
            </Card.Body>
          </div>
        </div>
      </Card>
    </SwiperSlide>,
    <SwiperSlide>
      <Card style={{ width: "300px", height: "130px" }}>
        <div className="d-flex justify-content-between">
          <div>
            <Card.Img src={cardimge5} style={{ width: "80px", height: "80px", borderRadius: "50%", margin: " 15px 5px auto" }} variant="bottom" />
          </div>
          <div>
            <Card.Body>
              <Card.Title>
                <h6>Dr. Santosh Bhagwat Raut</h6>{" "}
              </Card.Title>

              <p style={{ fontSize: "12px", lineHeight: "0" }}>Dermatologist, Cosmetologist</p>
              <p style={{ fontSize: "12px", lineHeight: "0" }}>18 years Experience</p>
              <p style={{ fontSize: "12px", lineHeight: "0" }}>5793 consults done</p>
            </Card.Body>
          </div>
        </div>
      </Card>
    </SwiperSlide>,
    <SwiperSlide>
      <Card style={{ width: "300px", height: "130px" }}>
        <div className="d-flex justify-content-between">
          <div>
            <Card.Img src={cardimge6} style={{ width: "80px", height: "80px", borderRadius: "50%", margin: " 15px 5px auto" }} variant="bottom" />
          </div>
          <div>
            <Card.Body>
              <Card.Title>
                <h6>Dr. Arpita</h6>{" "}
              </Card.Title>

              <p style={{ fontSize: "12px", lineHeight: "0" }}>Dermatologist</p>
              <p style={{ fontSize: "12px", lineHeight: "0" }}>9 years Experience</p>
              <p style={{ fontSize: "12px", lineHeight: "0" }}>13678 consults done</p>
            </Card.Body>
          </div>
        </div>
      </Card>
    </SwiperSlide>,
    <SwiperSlide>
      <Card style={{ width: "300px", height: "130px" }}>
        <div className="d-flex justify-content-between">
          <div>
            <Card.Img src={cardimge7} style={{ width: "80px", height: "80px", borderRadius: "50%", margin: " 15px 5px auto" }} variant="bottom" />
          </div>
          <div>
            <Card.Body>
              <Card.Title>
                <h6>Dr. Tejashree M</h6>{" "}
              </Card.Title>

              <p style={{ fontSize: "12px", lineHeight: "0" }}>Obstetrician, Gynecologist</p>
              <p style={{ fontSize: "12px", lineHeight: "0" }}>8 years Experience</p>
              <p style={{ fontSize: "12px", lineHeight: "0" }}>1805 consults done</p>
            </Card.Body>
          </div>
        </div>
      </Card>
    </SwiperSlide>,
    <SwiperSlide>
      <Card style={{ width: "300px", height: "130px" }}>
        <div className="d-flex justify-content-between">
          <div>
            <Card.Img src={cardimge8} style={{ width: "80px", height: "80px", borderRadius: "50%", margin: " 15px 5px auto" }} variant="bottom" />
          </div>
          <div>
            <Card.Body>
              <Card.Title>
                <h6>Dr. Shweta Vahile</h6>{" "}
              </Card.Title>

              <p style={{ fontSize: "12px", lineHeight: "0" }}>Obstetrician, Gynecologist</p>
              <p style={{ fontSize: "12px", lineHeight: "0" }}>9 years Experience</p>
              <p style={{ fontSize: "12px", lineHeight: "0" }}>1105 consults done</p>
            </Card.Body>
          </div>
        </div>
      </Card>
    </SwiperSlide>
  );
  return (
    <div>
      <p className=" container text-start mb-5"> Popular Products </p>
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

export default VideoConsultSlide4;

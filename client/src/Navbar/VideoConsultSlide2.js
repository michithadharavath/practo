import React from "react";
import "./VideoConsultSlide2.css";
import Card from "react-bootstrap/Card";
// import Button from "react-bootstrap/esm/Button";

import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, Autoplay, Virtual } from "swiper/core";
import "swiper/swiper-bundle.css";

import cardimge1 from "./images/cough-cold-v1.jpg";
import cardimge2 from "./images/period-problems-v1.jpg";
import cardimge3 from "./images/performance-issues-bed-v1.jpg";
import cardimge4 from "./images/skin-problems-v1.jpg";
import cardimge5 from "./images/depression-anxiety-v1.jpg";
import cardimge6 from "./images/lose-weight-v1.jpg";
import cardimge7 from "./images/stomach-issues-v1.jpg";
import cardimge8 from "./images/vaginal-infections-v1.jpg";
import cardimge9 from "./images/sick-kid-v1.jpg";

SwiperCore.use([Navigation, Pagination, Autoplay, Virtual]);

const VideoConsultSlide2 = () => {
  const slides = [];

  slides.push(
    <SwiperSlide>
      <Card className="swipcard11">
        <Card.Img src={cardimge1} style={{ width: "300px", height: "200px", textAlign: "center" }} variant="top" />
        <Card.Body>
          <Card.Title> Cough & Cold </Card.Title>
          <Card.Text> &#8377; 399</Card.Text>
          <a href="/#" className="text-info text-decoration-none fs-5 fw-bold">
            Consult now <i className="bi bi-chevron-right"></i>
          </a>
        </Card.Body>
      </Card>
    </SwiperSlide>,
    <SwiperSlide>
      <Card className="swipcard22">
        <Card.Img variant="top" src={cardimge2} style={{ width: "300px", height: "200px", textAlign: "center" }} />
        <Card.Body>
          <Card.Title>Period problems?</Card.Title>
          <Card.Text>&#8377; 499</Card.Text>
          <a href="/#" className="text-info text-decoration-none fs-5 fw-bold">
            Consult now <i className="bi bi-chevron-right"></i>
          </a>
        </Card.Body>
      </Card>
    </SwiperSlide>,
    <SwiperSlide>
      <Card className="swipcard33">
        <Card.Img variant="top" src={cardimge3} style={{ width: "300px", height: "200px", textAlign: "center" }} />
        <Card.Body>
          <Card.Title>Performance issue in bed?</Card.Title>
          <Card.Text>&#8377; 399</Card.Text>
          <a href="/#" className="text-info text-decoration-none fs-5 fw-bold">
            Consult now <i className="bi bi-chevron-right"></i>
          </a>
        </Card.Body>
      </Card>
    </SwiperSlide>,
    <SwiperSlide>
      <Card className="swipcard44">
        <Card.Img variant="top" src={cardimge4} style={{ width: "300px", height: "200px", textAlign: "center" }} />
        <Card.Body>
          <Card.Title>Skin problems?</Card.Title>
          <Card.Text>&#8377; 499</Card.Text>
          <a href="/#" className="text-info text-decoration-none fs-5 fw-bold">
            Consult now <i className="bi bi-chevron-right"></i>
          </a>
        </Card.Body>
      </Card>
    </SwiperSlide>,
    <SwiperSlide>
      <Card className="swipcard55">
        <Card.Img variant="top" src={cardimge5} style={{ width: "300px", height: "200px", textAlign: "center" }} />
        <Card.Body>
          <Card.Title>Depression or anxiety?</Card.Title>
          <Card.Text>&#8377; 499</Card.Text>
          <a href="/#" className="text-info text-decoration-none fs-5 fw-bold">
            Consult now <i className="bi bi-chevron-right"></i>
          </a>
        </Card.Body>
      </Card>
    </SwiperSlide>,
    <SwiperSlide>
      <Card className="swipcard66">
        <Card.Img variant="top" src={cardimge6} style={{ width: "300px", height: "200px", textAlign: "center" }} />
        <Card.Body>
          <Card.Title>Want to lose weight? </Card.Title>
          <Card.Text>&#8377; 350</Card.Text>
          <a href="/#" className="text-info text-decoration-none fs-5 fw-bold">
            Consult now <i className="bi bi-chevron-right"></i>
          </a>
        </Card.Body>
      </Card>
    </SwiperSlide>,
    <SwiperSlide>
      <Card className="swipcard77">
        <Card.Img variant="top" src={cardimge7} style={{ width: "300px", height: "200px", textAlign: "center" }} />
        <Card.Body>
          <Card.Title>Stomach issues?</Card.Title>
          <Card.Text>&#8377; 399</Card.Text>
          <a href="/#" className="text-info text-decoration-none fs-5 fw-bold">
            Consult now <i className="bi bi-chevron-right"></i>
          </a>
        </Card.Body>
      </Card>
    </SwiperSlide>,
    <SwiperSlide>
      <Card className="swipcard88">
        <Card.Img variant="top" src={cardimge8} style={{ width: "300px", height: "200px", textAlign: "center" }} />
        <Card.Body>
          <Card.Title>vaginal infections</Card.Title>
          <Card.Text>&#8377; 499</Card.Text>
          <a href="/#" className="text-info text-decoration-none fs-5 fw-bold">
            Consult now <i className="bi bi-chevron-right"></i>
          </a>
        </Card.Body>
      </Card>
    </SwiperSlide>,
    <SwiperSlide>
      <Card className="swipcard99">
        <Card.Img variant="top" src={cardimge9} style={{ width: "300px", height: "200px", textAlign: "center" }} />
        <Card.Body>
          <Card.Title>sick kid?</Card.Title>
          <Card.Text>&#8377; 499</Card.Text>
          <a href="/#" className="text-info text-decoration-none fs-5 fw-bold">
            Consult now <i className="bi bi-chevron-right"></i>
          </a>
        </Card.Body>
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

export default VideoConsultSlide2;

import React from "react";
import "./VideoConsultSlide5.css";
import Card from "react-bootstrap/Card";
// import Button from "react-bootstrap/esm/Button";

import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, Autoplay, Virtual } from "swiper/core";
import "swiper/swiper-bundle.css";

import cardimge1 from "./images/testimonial-abhy-v1.png";
import cardimge2 from "./images/testimonial-default-women-v1.png";
import cardimge3 from "./images/testimonial-deepak-v1.png";
import cardimge4 from "./images/testimonial-anamika-v1.png";
import cardimge5 from "./images/testimonial-maitreyi-v1.png";
import cardimge6 from "./images/testimonial-bismoy-v1.png";

SwiperCore.use([Navigation, Pagination, Autoplay, Virtual]);

const VideoConsultSlide5 = () => {
  const slides = [];

  slides.push(
    <SwiperSlide>
      <Card style={{ width: "25rem", height: "15rem" }}>
        <div className="d-flex justify-content-between">
          <div>
            <Card.Img src={cardimge1} style={{ width: "50px", height: "50px", borderRadius: "50%", margin: " 15px 5px auto" }} />
          </div>
          <div>
            <Card.Body>
              <Card.Title>
                <h4>Abhy</h4> <p>33Yr old IT Professional</p>
              </Card.Title>
              <Card.Text>
                I was really sick and <strong>couldn't get out of bed.</strong> I talked to the doctor through Practo and he shared a{" "}
                <strong>prescription in 10 minutes.</strong>I even got the <strong>medicines delivered on the same day</strong> through Practo, just a WOW
                experience.
              </Card.Text>
            </Card.Body>
          </div>
        </div>
      </Card>
    </SwiperSlide>,
    <SwiperSlide>
      <Card style={{ width: "25rem", height: "15rem" }}>
        <div className="d-flex justify-content-between">
          <div>
            <Card.Img src={cardimge2} style={{ width: "50px", height: "50px", borderRadius: "50%", margin: " 15px 5px auto" }} />
          </div>
          <div>
            <Card.Body>
              <Card.Title>
                <h4>Preeti</h4> <p>26Yr old IT Professional</p>
              </Card.Title>
              <Card.Text>
                I was <strong>in pain</strong> and it was really
                <strong> late at night.</strong> I wanted help but couldn't go to see the doctor due to lateness of the hour. Consulted online on Practo and{" "}
                <strong>doctor responded immediately.</strong>
              </Card.Text>
            </Card.Body>
          </div>
        </div>
      </Card>
    </SwiperSlide>,
    <SwiperSlide>
      <Card style={{ width: "25rem", height: "15rem" }}>
        <div className="d-flex justify-content-between">
          <div>
            <Card.Img src={cardimge3} style={{ width: "50px", height: "50px", borderRadius: "50%", margin: " 15px 5px auto" }} />
          </div>
          <div>
            <Card.Body>
              <Card.Title>
                <h4>Deepak</h4> <p>29Yr old Traveller </p>
              </Card.Title>
              <Card.Text>
                I was travelling to a <strong>remote place</strong> for scuba diving and
                <strong> injured myself.</strong> Tough to find doctors around, so did an
                <strong>online consultation.</strong> on Practo and hey presto, I have my <strong>medicines.</strong> Disruptive. Convenient.
              </Card.Text>
            </Card.Body>
          </div>
        </div>
      </Card>
    </SwiperSlide>,
    <SwiperSlide>
      <Card style={{ width: "25rem", height: "15rem" }}>
        <div className="d-flex justify-content-between">
          <div>
            <Card.Img src={cardimge4} style={{ width: "50px", height: "50px", borderRadius: "50%", margin: " 15px 5px auto" }} />
          </div>
          <div>
            <Card.Body>
              <Card.Title>
                <h4>Anamika Bajpai</h4> <p>Anonymous</p>
              </Card.Title>
              <Card.Text>Excellent experience consulting on Practo. I could solve my health issue without going to a clinic! Highly recommended!</Card.Text>
            </Card.Body>
          </div>
        </div>
      </Card>
    </SwiperSlide>,
    <SwiperSlide>
      <Card style={{ width: "25rem", height: "15rem" }}>
        <div className="d-flex justify-content-between">
          <div>
            <Card.Img src={cardimge5} style={{ width: "50px", height: "50px", borderRadius: "50%", margin: " 15px 5px auto" }} />
          </div>
          <div>
            <Card.Body>
              <Card.Title>
                <h4>Maitreyi Purohit</h4> <p>Anonymous</p>
              </Card.Title>
              <Card.Text>I got answers to all my medical queries. I’ll definitely recommend online consultations on Practo to others.</Card.Text>
            </Card.Body>
          </div>
        </div>
      </Card>
    </SwiperSlide>,
    <SwiperSlide>
      <Card style={{ width: "25rem", height: "15rem" }}>
        <div className="d-flex justify-content-between">
          <div>
            <Card.Img src={cardimge6} style={{ width: "50px", height: "50px", borderRadius: "50%", margin: " 15px 5px auto" }} />
          </div>
          <div>
            <Card.Body>
              <Card.Title>
                <h4>Mr. Bismoy Murasing</h4> <p>Anonymous</p>
              </Card.Title>
              <Card.Text>
                The consultation on Practo was great and I'm very happy with the experience. Would certainly ask other people to consult online.
              </Card.Text>
            </Card.Body>
          </div>
        </div>
      </Card>
    </SwiperSlide>
  );
  return (
    <div>
      <h2 className=" container text-start mb-5">Our Doctors</h2>
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
            slidesPerView: 3,
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

export default VideoConsultSlide5;

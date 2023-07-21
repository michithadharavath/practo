import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import image1 from "./images/testimony2.9e5212dc.jpg";
import image2 from "./images/testimony1.07a22a47.jpg";
import image3 from "./images/testimony3.4d68a92d.jpg";
import image4 from "./images/testimony4.785cc0a7.jpg";
import image5 from "./images/testimony5.1bdacfb6.jpg";
const MedicinesSlickSlider1 = () => {
  const settings = {
    // Slick Slider settings/options
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="container mb-5 mt-5">
      <h4 className="mb-5">What our users have to say</h4>
      <Slider {...settings}>
        <div>
          <h4 style={{ fontWeight: "normal" }}>
            Beautiful application with elegant UI Design. I found this app very useful. Placed Order for a few medicines and recieved in just two days. Same
            medicine costs me +100 from local Shop. Recommended application. :-.
          </h4>
          <div className="d-flex justify-content-center">
            <div>
              <img src={image1} style={{ width: "50px", height: "50px", borderRadius: "50%", margin: " 15px 5px auto" }} alt="" />
            </div>
            <div className="text-start p-1">
              <span>Ayush Verma</span> <p className="text-secondary">Oct 5, 2018 at 11:33 AM</p>
            </div>
          </div>
        </div>
        <div>
          <h4 style={{ fontWeight: "normal" }}>Very useful app. It saves time and money and genuine. Keep going Practo. Thank you.</h4>
          <div className="d-flex justify-content-center">
            <div>
              <img src={image2} style={{ width: "50px", height: "50px", borderRadius: "50%", margin: " 15px 5px auto" }} alt="" />
            </div>
            <div className="text-start p-1">
              <span>Rakesh Raki</span> <p className="text-secondary">Nov 11, 2018 at 11:27 AM</p>
            </div>
          </div>
        </div>
        <div>
          <h4 style={{ fontWeight: "normal" }}>Most useful and saving more money on medicine.</h4>
          <div className="d-flex justify-content-center">
            <div>
              <img src={image3} style={{ width: "50px", height: "50px", borderRadius: "50%", margin: " 15px 5px auto" }} alt="" />
            </div>
            <div className="text-start p-1">
              <span>Vamshi Krishna</span> <p className="text-secondary">Oct 3, 2018 at 7:13 PM</p>
            </div>
          </div>
        </div>
        <div>
          <h4 style={{ fontWeight: "normal" }}>Nice app for people who want to manage time for searching medicine.</h4>
          <div className="d-flex justify-content-center">
            <div>
              <img src={image4} style={{ width: "50px", height: "50px", borderRadius: "50%", margin: " 15px 5px auto" }} alt="" />
            </div>
            <div className="text-start p-1">
              <span>Kishor Jha</span> <p className="text-secondary">Sep 11, 2018 at 8:52 PM</p>
            </div>
          </div>
        </div>
        <div>
          <h4 style={{ fontWeight: "normal" }}>I ordered medicine. It was delivered right time. With big discount.</h4>
          <div className="d-flex justify-content-center">
            <div>
              <img src={image5} style={{ width: "50px", height: "50px", borderRadius: "50%", margin: " 15px 5px auto" }} alt="" />
            </div>
            <div className="text-start p-1">
              <span>Mahesh Sisara</span> <p className="text-secondary">Sep 26, 2018 at 4:56 PM</p>
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default MedicinesSlickSlider1;

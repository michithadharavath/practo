import React from "react";
import "../Navbar/Medicines.css";
import InputGroup from "react-bootstrap/InputGroup";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/esm/Button";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
// import Carousel from "react-bootstrap/Carousel";
// import CarouselItem from "react-bootstrap/CarouselItem";
import MedicinesSlide0 from "./MedicinesSlide0";
import MedicinesSlide1 from "./MedicinesSlide1";
import MedicinesSlide2 from "./MedicinesSlide2";
import MedicinesSlide3 from "./MedicinesSlide3";
import cardimge1 from "./images/mar-card-1.webp";
import cardimge2 from "./images/mar-card-2.5a0b85e1.png";
import image1 from "./images/full-width-4.webp";
import image2 from "./images/app-banner@2x.webp";
import MedicinesReadmore1 from "./MedicinesReadMore1";
import MedicinesSlickSlider1 from "./MedicinesSlickSlider1";
const Medicines = () => {
  return (
    <div>
      {/* -----------10th container-------------------------------------------------------------------------------------- */}
      <div className=" container d-flex justify-content-between flex-wrap">
        <div style={{ width: "700px" }}>
          <InputGroup size="sm" className="mb-3">
            {/* <InputGroup.Text>
            <i className="bi bi-geo-alt"></i>
          </InputGroup.Text>
          <Form.Control aria-label="Last name" placeholder="BANGLORE" /> */}
            <InputGroup.Text>
              <i className="bi bi-search"></i>
            </InputGroup.Text>
            <Form.Control aria-label="Last name" placeholder="Search doctors,clinics,hospitals" />
          </InputGroup>
        </div>
        <div>
          <Button variant="info text-light   m-1">
            {" "}
            <i class="bi bi-cart2"></i>VIEW CART
          </Button>
        </div>
      </div>
      {/* -----------10th container-------------------------------------------------------------------------------------- */}
      <MedicinesSlide0 />
      {/* -----------10th container-------------------------------------------------------------------------------------- */}
      <h2 className=" container text-start">Browse medicines & health products</h2>

      <MedicinesSlide1 />
      {/* -----------10th container-------------------------------------------------------------------------------------- */}
      <MedicinesSlide2 />
      {/* -----------10th container-------------------------------------------------------------------------------------- */}
      <MedicinesSlide3 />
      {/* -----------10th container-------------------------------------------------------------------------------------- */}
      <div className=" container d-flex justify-content-between flex-wrap  text-start ">
        <div className="deskimageOne" style={{ width: "630px", height: "300px", fontSize: "10px" }}>
          <h6 className="text-info  ">INTRODUCING CONSULTATION DESK</h6>
          <h4 style={{ fontSize: "15px" }}>Don't self medicate. Talk to an expert. Consult a doctor in less than 2 minutes.</h4>
          <Card.Img src={cardimge1} alt="" style={{ width: "100%", maxWidth: "630px", height: "280px" }} />
        </div>
        <div style={{ width: "630px", height: "300px", fontSize: "10px" }} className="deskimageTwo">
          <h6 className="text-info">INTRODUCING FAST DELIVERY</h6>
          <h4 style={{ fontSize: "15px" }}>Tired of waiting in a queue? Too weak to go down and buy medicines?</h4>
          <Card.Img src={cardimge2} alt="" style={{ width: "100%", maxWidth: "630px", height: "280px" }} />
        </div>
      </div>
      <div className=" bg-light " style={{ margin: "100px 0 0 0" }}>
        <div>
          <Card.Img src={image1} alt="" style={{ width: "100%", maxWidth: "1200px", height: "300px" }} className="phoneimage" />
        </div>
      </div>

      {/* -----------10th container-------------------------------------------------------------------------------------- */}
      <MedicinesSlickSlider1 />
      {/* <Carousel variant="dark ">
        <CarouselItem>
          <p style={{ fontSize: "12px", padding: "30px" }}>
            Very easy to book,maintain history. Hassle free from older versions of booking appointment via telephone.. Thanks Practo for making it simple.{" "}
          </p>
          <span>
            <i className="bi bi-person-circle p-1 "></i>
            <span>sherma</span>
          </span>
        </CarouselItem>
        <CarouselItem>
          <p style={{ fontSize: "12px", padding: "30px" }}>
            Very helpful. Far easier than doing same things on computer. Allows quick and easy search with speedy booking. Even maintains history of doctors
            visited.
          </p>
          <span>
            <i className="bi bi-person-circle p-1 "></i>
            <span>deepti</span>
          </span>
        </CarouselItem>
        <CarouselItem>
          <p style={{ fontSize: "12px", padding: "30px" }}>
            I had severe pain in chest as well blood in cough. I searched through a lot of pulmonologists based on rankings and feedbacks and finally settled to
            consult Dr Indu Bubna. She quickly diagnosed my disease as pulmonary embolism and I was admitted to ICU. Now its all fine. If i would have gotten
            late then I wouldn't be writing this. Thanks Practo!.
          </p>
          <span>
            <i className="bi bi-person-circle p-1 "></i>
            <span>silvha</span>
          </span>
        </CarouselItem>
        <CarouselItem>
          <p style={{ fontSize: "12px", padding: "30px" }}>
            Great app..get to know actual qualification of doctors n their alma mater n experience to judge the background..along with peoples review...have
            stopped calling n taking appointments..just practo it.
          </p>
          <span>
            <i className="bi bi-person-circle p-1 "></i>
            <span>jay jai</span>
          </span>
        </CarouselItem>
      </Carousel> */}

      {/* -----------10th container-------------------------------------------------------------------------------------- */}
      <div className="bg-light">
        <Container>
          <div className="d-flex flex-wrap justify-content-around">
            <div>
              <img src={image2} style={{ height: "400px" }} alt="" />
            </div>
            <div>
              <p className=" text-start fw-bold fs-1">Download the Practo app</p>
              <p className=" text-start  fs-5">Your home for health is one tap away.</p>
              <p className="text-start">
                Book appointments, Order health products, Consult with a doctor online,
                <br /> Book health chekups, store health records & read health tips.
              </p>
              <p className="text-start">Send the link to download the app</p>
              <div className="d-flex flex-wrap mb-2 ">
                <div>
                  <div className="input-group input-group-lg">
                    <span className="input-group-text" id="input-group-lg-example">
                      +91
                    </span>
                    <input
                      type="text"
                      className="form-control"
                      aria-label="Large input group"
                      aria-describedby="input-group-lg"
                      placeholder="Enter Phone Number"
                    />
                  </div>
                </div>
                <div>
                  <Button variant="info text-light   m-1">Send app link</Button>
                </div>
              </div>
              <div className="d-flex">
                <div>
                  <Button variant="dark text-light py-2  m-1">
                    <i className="bi bi-google-play p-2"></i>Google Play
                  </Button>
                </div>
                <div>
                  <Button variant="dark text-light py-2  m-1">
                    <i className="bi bi-apple p-2"></i> App Store
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
      {/* -----------11th container-------------------------------------------------------------------------------------- */}
      <Container>
        <p style={{ fontSize: "12px" }} className="text-start">
          <strong>Order Medicines & Health Products Online : India's most reliable Online Medical Store</strong>
          <br /> Find and buy medicines online with Practo Pharmacy. Browse through prescription medicines, OTC products, health & wellness products on an
          online pharmacy that provides hassle free service across 100+ cities in India With an extensive catalogue of medicines and healthcare products
          provided on an extensive and easy to navigate destination for online medicine shopping, <br /> Practo Pharmacy provides added advantages which
          include: <br />
          <ul>
            <li className="aabb11">
              Automated prescription refill: Set up scheduled refills for your online medicine orders and never worry about running out of your meds
            </li>
            <li className="aabb11">Doorstep delivery: No more trips to the pharmacy, with on-time delivery of your medicines right to your doorstep</li>
            <li className="aabb11">
              Medicine order history: No more scrolling through pages to find what you need. Just check your medicine order history and re-order
            </li>
            <li className="aabb11">Exclusive offers and discounts: Enjoy cashbacks, flat discounts and other exclusive offers on your medicine orders</li>
          </ul>
          <MedicinesReadmore1 />
        </p>
      </Container>
    </div>
  );
};

export default Medicines;

import React from "react";
import "../Navbar/Practo.css";
// import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import InputGroup from "react-bootstrap/InputGroup";
import Form from "react-bootstrap/Form";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, Autoplay, Virtual } from "swiper/core";
import "swiper/swiper-bundle.css";
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
import image from "./images/dweb_instant_video_consulation.webp";
import image1 from "./images/dweb_find_doctors.webp";
import image2 from "./images/dweb_medicines.webp";
import image3 from "./images/dweb_surgeries.webp";
import image4 from "./images/dweb_lab_tests.png";
import image5 from "./images/Acne.webp";
import image6 from "./images/coughing.webp";
import image7 from "./images/12-mental-wellness.webp";
import image8 from "./images/top-speciality-pediatric.svg";
import image9 from "./images/top-speciality-sexology.svg";
import image10 from "./images/irregular-painful+period.webp";
// import image11 from "./images/sp-dentist@2x.jpg";
// import image12 from "./images/sp-dietitian@2x.jpg";
// import image13 from "./images/sp-gastroenterologist@2x.jpg";
// import image14 from "./images/sp-general-doctor@2x.jpg";
// import image15 from "./images/sp-general-surgeon@2x.jpg";
// import image16 from "./images/sp-gynecologist@2x.jpg";
// import image17 from "./images/sp-orthopedist@2x.jpg";
// import image18 from "./images/sp-pediatrician@2x.jpg";
// import image19 from "./images/sp-physiotherapist@2x.jpg";
import image20 from "./images/chronic_consumer_banner_dweb.png";
import image21 from "./images/5fd27b74d9477cb633445cf3f105078bbc479910.jpg";
import image22 from "./images/bade52edc7fb158bf627216bf96c2b881a97f30c.jpg";
import image23 from "./images/footer-img.webp";
import Carousel from "react-bootstrap/Carousel";
import CarouselItem from "react-bootstrap/CarouselItem";

SwiperCore.use([Navigation, Pagination, Autoplay, Virtual]);
const Practo = () => {
  const slides = [];

  slides.push(
    <SwiperSlide>
      <Card>
        <Card.Img variant="top" className="cardimage11" />
        <Card.Body>
          <Card.Title>Dentist</Card.Title>
          <Card.Text>Teething troubles? Schedule a dental checkup</Card.Text>
          {/* <Button variant="primary">Go somewhere</Button> */}
        </Card.Body>
      </Card>
    </SwiperSlide>,
    <SwiperSlide>
      <Card>
        <Card.Img variant="top" className="cardimage12" />
        <Card.Body>
          <Card.Title>Dietitian/Nutrition</Card.Title>
          <Card.Text>Get guidance on eating right, weight management and sports.</Card.Text>
        </Card.Body>
      </Card>
    </SwiperSlide>,
    <SwiperSlide>
      <Card>
        <Card.Img variant="top" className="cardimage13" />
        <Card.Body>
          <Card.Title>Gastroenterologist</Card.Title>
          <Card.Text>Explore for issues related to digestive system, liver and pancreas</Card.Text>
        </Card.Body>
      </Card>
    </SwiperSlide>,
    <SwiperSlide>
      <Card>
        <Card.Img variant="top" className="cardimage14" />
        <Card.Body>
          <Card.Title>General physician</Card.Title>
          <Card.Text>Find the right family doctor in your neighborhood</Card.Text>
        </Card.Body>
      </Card>
    </SwiperSlide>,
    <SwiperSlide>
      <Card>
        <Card.Img variant="top" className="cardimage15" />
        <Card.Body>
          <Card.Title>General surgeon</Card.Title>
          <Card.Text>Need to get operated? Find the right surgeon</Card.Text>
        </Card.Body>
      </Card>
    </SwiperSlide>,
    <SwiperSlide>
      <Card>
        <Card.Img variant="top" className="cardimage16" />
        <Card.Body>
          <Card.Title>Gynecologist/Obstetrician</Card.Title>
          <Card.Text>Explore for women's health, pregnancy and infertility treatments</Card.Text>
        </Card.Body>
      </Card>
    </SwiperSlide>,
    <SwiperSlide>
      <Card>
        <Card.Img variant="top" className="cardimage17" />
        <Card.Body>
          <Card.Title>Orthopedist</Card.Title>
          <Card.Text>For Bone and Joints issues, spinal injuries and more</Card.Text>
        </Card.Body>
      </Card>
    </SwiperSlide>,
    <SwiperSlide>
      <Card>
        <Card.Img variant="top" className="cardimage18" />
        <Card.Body>
          <Card.Title>Pediatrician</Card.Title>
          <Card.Text>Child Specialists and Doctors for Infant</Card.Text>
        </Card.Body>
      </Card>
    </SwiperSlide>,
    <SwiperSlide>
      <Card>
        <Card.Img variant="top" className="cardimage19" />
        <Card.Body>
          <Card.Title>Physiotherapist</Card.Title>
          <Card.Text>Pulled a muscle? Get it treated by a trained physiotherapist</Card.Text>
        </Card.Body>
      </Card>
    </SwiperSlide>
  );

  return (
    <Container>
      <div>
        <InputGroup size="sm" className="mb-3">
          <InputGroup.Text>
            <i className="bi bi-geo-alt"></i>
          </InputGroup.Text>
          <Form.Control aria-label="Last name" placeholder="BANGLORE" />
          <InputGroup.Text>
            <i className="bi bi-search"></i>
          </InputGroup.Text>
          <Form.Control aria-label="Last name" placeholder="Search doctors,clinics,hospitals" />
        </InputGroup>
      </div>
      <div></div>
      <div className="container mb-5  border-5">
        {/* <h4>
          Practo <span className="trans">TRANSFORM</span>
        </h4> 
        <h2 className="live-dia">Live a diabetes-free life</h2>
        <h2>Join pract's Diabetes Remission Program</h2>
        <p>Reduce HbA1C</p>
        <p>No more medications</p> */}
        <img src={image20} alt="banner" style={{ height: "auto", width: "100%" }} />
      </div>
      <div>
        <div className="d-flex justify-content-between flex-wrap  p-4 mb-5  text-start">
          <div>
            <Card style={{ width: "14rem" }} className="card1">
              <Card.Img variant="top" src={image} className="cardimg1" />
              <Card.Body>
                <Card.Title className="fs-4">Instant Video Consultation</Card.Title>
                <Card.Text>Connect within 60secs</Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div>
            <Card style={{ width: "14rem" }} className="card1">
              <Card.Img variant="top" src={image1} className="cardimg2" />
              <Card.Body>
                <Card.Title className="fs-4">Find Doctors Near You</Card.Title>
                <Card.Text>Confirmed appointments</Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div>
            <Card style={{ width: "14rem" }} className="card1">
              <Card.Img variant="top" src={image2} className="cardimg3" />
              <Card.Body>
                <Card.Title className="fs-4">Medicines doorstep corrior</Card.Title>
                <Card.Text>Essentials at your doorstep </Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div>
            <Card style={{ width: "14rem" }} className="card1">
              <Card.Img variant="top" src={image3} className="cardimg4" />
              <Card.Body>
                <Card.Title className="fs-4">Lab Testes</Card.Title>
                <Card.Text>Sample pick up at your home</Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div>
            <Card style={{ width: "14rem" }} className="card1">
              <Card.Img variant="top" src={image4} className="cardimg5" />
              <Card.Body>
                <Card.Title className="cardtit">Surgeries</Card.Title>
                <Card.Text>Safe and trusted surgery centers</Card.Text>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
      <div className="container d-flex flex-wrap justify-content-between mb-5 text-start">
        <div>
          <h2 className="fs-4">Consult top doctors online for any health concern</h2>
          <p className="fs-6 ">Private online consultations with verified doctors in all specialists</p>
        </div>
        <div>
          <Button variant="outline-info">View All specialists</Button>{" "}
        </div>
      </div>
      <div className="container d-flex flex-wrap  justify-content-between mb-5  ">
        <div style={{ width: "200px" }}>
          <img src={image5} alt="" style={{ width: "150px" }} />
          <h6>Acne,pimple or skin issues</h6>
          <a href="/#" className="text-info text-decoration-none bold ">
            Consult now
          </a>
        </div>
        <div style={{ width: "200px" }}>
          <img src={image6} alt="" style={{ width: "150px" }} />
          <h6>Cold cough and fever</h6>
          <a href="/#" className="text-info text-decoration-none">
            Consult now
          </a>
        </div>
        <div style={{ width: "200px" }}>
          <img src={image7} alt="" style={{ width: "150px" }} />
          <h6>Depression and anxiety</h6>
          <a href="/#" className="text-info text-decoration-none">
            Consult now
          </a>
        </div>
        <div style={{ width: "200px" }}>
          <img src={image8} alt="" style={{ width: "150px" }} />
          <h6>Child not feeling well</h6>
          <a href="/#" className="text-info text-decoration-none">
            Consult now
          </a>
        </div>
        <div style={{ width: "200px" }}>
          <img src={image9} alt="" style={{ width: "150px" }} />
          <h6>Performance issues in bed</h6>
          <a href="/#" className="text-info text-decoration-none">
            Consult now
          </a>
        </div>
        <div style={{ width: "200px" }}>
          <img src={image10} alt="" style={{ width: "150px" }} />
          <h6>Period doubts or Pregnancy</h6>
          <a href="/#" className="text-info text-decoration-none ">
            Consult now
          </a>
        </div>
      </div>

      <div className="container text-start">
        <h2 className="fs-4">Book an appointment for an in-clinic consultation</h2>
        <p className="fs-6 ">Find experienced doctors across all specialties</p>
      </div>
      <Swiper
        id="swiper"
        // virtual
        slidesPerView={4}
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
      <hr />
      <div className="container d-flex flex-wrap  justify-content-around mb-3 p-3 ">
        <div style={{ width: "400px" }} className="text-start">
          <h2>Read top articles from health experts</h2>
          <p>Health articles that keep you informed about good health practices and achieve your goals.</p>
          <Button variant="info text-light p-2 m-2">See all articles</Button>
        </div>
        <div style={{ width: "300px" }} className="text-start">
          <img src={image21} alt="" style={{ width: "300px", height: "250px" }} className="rounded-3" />
          <a href="/#" className="text-success text-decoration-none ">
            CORONAVIRUS
          </a>
          <h6>12 Coronavirus Mythus and Facts That You Should Be Aware Of</h6>
          <p>Dr.Diana Borgio</p>
        </div>
        <div style={{ width: "300px" }} className="text-start">
          <img src={image22} alt="" style={{ width: "300px", height: "250px" }} className="rounded-3" />
          <a href="/#" className="text-success text-decoration-none ">
            {" "}
            VITAMINS AND SUPPLEMENTS
          </a>
          <h6>Eating Right To Build Immunity Against Cold And Viral Infection</h6>
          <p>Dr.Diana Borgio</p>
        </div>
      </div>
      <hr />
      <div>
        <Carousel className="p-5 carousel-dark">
          <CarouselItem className="p-5">
            <h2>What our users have to say</h2>
            <p className="fs-5 text-center p-3">
              Very helpful. Far easier than doing same things on computer. Allows quick and easy search with speedy booking. Even maintains history of doctors
              visited.
            </p>
            <span>
              <i className="bi bi-person-circle p-1 "></i>
              <span>shri janani</span>
            </span>
          </CarouselItem>
          <CarouselItem className="p-5">
            <h2>What our users have to say</h2>
            <p className="fs-5 text-center p-3">
              Very easy to book,maintain history. Hassle free from older versions of booking appointment via telephone.. Thanks Practo for making it simple.
            </p>
            <span>
              <i className="bi bi-person-circle p-1 "></i>
              <span>Amit sherma</span>
            </span>
          </CarouselItem>
          <CarouselItem className="p-5">
            <h2>What our users have to say</h2>
            <p className="fs-5 text-center p-3">
              Very good app. Well thought out about booking/rescheduling/canceling an appointment. Also, Doctor's feedback mechanism is good and describes all
              the basics in a good way.
            </p>
            <span>
              <i className="bi bi-person-circle p-1 "></i>
              <span>koushalya</span>
            </span>
          </CarouselItem>
          <CarouselItem className="p-5">
            <h2>What our users have to say</h2>
            <p className="fs-5 text-center p-3">
              Very easy to book,maintain history. Hassle free from older versions of booking appointment via telephone.. Thanks Practo for making it simple.
            </p>
            <span>
              <i className="bi bi-person-circle p-1 "></i>
              <span>Lavanaya</span>
            </span>
          </CarouselItem>
        </Carousel>
      </div>
      <hr />
      <div className=" bg-light d-flex  flex-wrap justify-content-around p-3 ">
        <div>
          <img src={image23} alt="" style={{ width: "400px", height: "400px" }} className="rounded-3" />
        </div>
        <div style={{ width: "500px", height: "400px" }}>
          <div className="text-start ">
            <h2>Download the Practo app</h2>
            <p className="mb-5">
              Access video consultation with India's top doctors on the Practo app. Connect with doctors online, available 24/7, from the comfort of your home.
            </p>
            <h6>Get the link to download the app</h6>
          </div>
          <div className="d-flex flex-wrap mb-2 ">
            <div>
              <div className="input-group input-group-lg">
                <span className="input-group-text" id="input-group-lg-example">
                  +91
                </span>
                <input type="text" className="form-control" aria-label="Large input group" aria-describedby="input-group-lg" placeholder="Enter Phone Number" />
              </div>
            </div>
            <div>
              <Button variant="info text-light   m-1">Send SMS</Button>
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
  );
};

export default Practo;

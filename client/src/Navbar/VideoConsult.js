import React from "react";
import "./VideoConsult.css";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/esm/Button";
import Container from "react-bootstrap/Container";
import image1 from "./images/homepage-hero-image-web-v1.png";
import image2 from "./images/app-download-banner-web.png";
import cardimge1 from "./images/top-speciality-gynaecologist.svg";
import cardimge2 from "./images/top-speciality-sexology.svg";
import cardimge3 from "./images/top-speciality-gp.svg";
import cardimge4 from "./images/top-speciality-dermatologist.svg";
import cardimge5 from "./images/top-speciality-psychiatric.svg";
import cardimge6 from "./images/top-speciality-stomach.svg";
import cardimge7 from "./images/top-speciality-pediatric.svg";
import cardimge8 from "./images/top-speciality-kidney.svg";

import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, Autoplay, Virtual } from "swiper/core";
import "swiper/swiper-bundle.css";
import VideoConsultSlide2 from "./VideoConsultSlide2";
import VideoConsultSlide3 from "./VideoConsultSlide3";
import VideoConsultSlide4 from "./VideoConsultSlide4";
import VideoConsultSlide5 from "./VideoConsultSlide5";
import ReadMore1 from "./ReadMore1";
import ReadMore2 from "./ReadMore2";
import ReadMore3 from "./ReadMore3";
import ReadMore4 from "./ReadMore4";
import ReadMore5 from "./ReadMore5";
import ReadMore6 from "./ReadMore6";

SwiperCore.use([Navigation, Pagination, Autoplay, Virtual]);

const VideoConsult = () => {
  const slides = [];

  slides.push(
    <SwiperSlide>
      <Card className="swipcard1">
        <Card.Img src={cardimge1} style={{ width: "120px", height: "120px", textAlign: "center", margin: "15px auto" }} variant="top" />
        <Card.Body>
          <Card.Title> Gynecology </Card.Title>
          <Card.Text> &#8377; 499</Card.Text>
          <a href="/#" className="text-info text-decoration-none fs-5 fw-bold">
            Consult now <i className="bi bi-chevron-right"></i>
          </a>
        </Card.Body>
      </Card>
    </SwiperSlide>,
    <SwiperSlide>
      <Card className="swipcard2">
        <Card.Img variant="top" src={cardimge2} style={{ width: "120px", height: "120px", textAlign: "center", margin: "15px auto" }} />
        <Card.Body>
          <Card.Title>Sexology</Card.Title>
          <Card.Text>&#8377; 499</Card.Text>
          <a href="/#" className="text-info text-decoration-none fs-5 fw-bold">
            Consult now <i className="bi bi-chevron-right"></i>
          </a>
        </Card.Body>
      </Card>
    </SwiperSlide>,
    <SwiperSlide>
      <Card className="swipcard3">
        <Card.Img variant="top" src={cardimge3} style={{ width: "120px", height: "120px", textAlign: "center", margin: "15px auto" }} />
        <Card.Body>
          <Card.Title> Physician</Card.Title>
          <Card.Text>&#8377; 399</Card.Text>
          <a href="/#" className="text-info text-decoration-none fs-5 fw-bold">
            Consult now <i className="bi bi-chevron-right"></i>
          </a>
        </Card.Body>
      </Card>
    </SwiperSlide>,
    <SwiperSlide>
      <Card className="swipcard4">
        <Card.Img variant="top" src={cardimge4} style={{ width: "120px", height: "120px", textAlign: "center", margin: "15px auto" }} />
        <Card.Body>
          <Card.Title>Dermatology</Card.Title>
          <Card.Text>&#8377; 499</Card.Text>
          <a href="/#" className="text-info text-decoration-none fs-5 fw-bold">
            Consult now <i className="bi bi-chevron-right"></i>
          </a>
        </Card.Body>
      </Card>
    </SwiperSlide>,
    <SwiperSlide>
      <Card className="swipcard5">
        <Card.Img variant="top" src={cardimge5} style={{ width: "120px", height: "120px", textAlign: "center", margin: "15px auto" }} />
        <Card.Body>
          <Card.Title>Psychiatry</Card.Title>
          <Card.Text>&#8377; 499</Card.Text>
          <a href="/#" className="text-info text-decoration-none fs-5 fw-bold">
            Consult now <i className="bi bi-chevron-right"></i>
          </a>
        </Card.Body>
      </Card>
    </SwiperSlide>,
    <SwiperSlide>
      <Card className="swipcard6">
        <Card.Img variant="top" src={cardimge6} style={{ width: "120px", height: "120px", textAlign: "center", margin: "15px auto" }} />
        <Card.Body>
          <Card.Title>Stomach </Card.Title>
          <Card.Text>&#8377; 399</Card.Text>
          <a href="/#" className="text-info text-decoration-none fs-5 fw-bold">
            Consult now <i className="bi bi-chevron-right"></i>
          </a>
        </Card.Body>
      </Card>
    </SwiperSlide>,
    <SwiperSlide>
      <Card className="swipcard7">
        <Card.Img variant="top" src={cardimge7} style={{ width: "120px", height: "120px", textAlign: "center", margin: "15px auto" }} />
        <Card.Body>
          <Card.Title>Pediatrics</Card.Title>
          <Card.Text>&#8377; 499</Card.Text>
          <a href="/#" className="text-info text-decoration-none fs-5 fw-bold">
            Consult now <i className="bi bi-chevron-right"></i>
          </a>
        </Card.Body>
      </Card>
    </SwiperSlide>,
    <SwiperSlide>
      <Card className="swipcard8">
        <Card.Img variant="top" src={cardimge8} style={{ width: "120px", height: "120px", textAlign: "center", margin: "15px auto" }} />
        <Card.Body>
          <Card.Title>Urology</Card.Title>
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
      {/* -----------1st container-------------------------------------------------------------------------------------- */}
      <div className="d-flex flex-wrap justify-content-center home1 pt-5 mb-3">
        <div className="text-start pt-5">
          <h2> Skip the travel!</h2>
          <h2>Take Online Doctor Consultation</h2>
          <p>Private consultation + Audio call · Starts at just ₹199</p>
          <div>
            <div></div>
            <div>
              <p>+146 Doctors are online</p>
            </div>
          </div>
          <div>
            <Button variant="info text-light p-2 m-2 fw-bold  fs-5 float-start">Consult Now</Button>
          </div>

          <div className="d-flex flex-wrap justify-content-cente">
            <div>
              {" "}
              <span className=" p-5">
                <i className="bi bi-person-check m-2"></i>Verified Doctors
              </span>
            </div>
            <div>
              <span className=" p-5">
                <i className="bi bi-prescription m-2"></i>Digital Prescription
              </span>
            </div>
            <div>
              <span className=" p-5">
                <i className="bi bi-card-checklist m-2"></i>Free Followup
              </span>
            </div>
          </div>
        </div>
        <div>
          <img src={image1} className="HomeImage1" alt="" />
        </div>
      </div>
      <div className="container d-flex flex-wrap justify-content-between mb-5 text-start">
        <div>
          <h2 className="fs-4 fw-bold">25+ Specialities</h2>
          <p className="fs-6 ">Consult with top doctors across specialities</p>
        </div>
        <div>
          <Button variant="outline-dark">See All specialists</Button>{" "}
        </div>
      </div>
      {/* -----------2nd container-------------------------------------------------------------------------------------- */}
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
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 6,
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
      {/* -----------3rd container-------------------------------------------------------------------------------------- */}
      <div className="container d-flex flex-wrap justify-content-between mb-5 text-start">
        <div>
          <h2 className="fs-4 fw-bold">Common Health Concerns</h2>
          <p className="fs-6 ">Consult a doctor online for any health issue</p>
        </div>
        <div>
          <Button variant="outline-dark">See All Symptoms</Button>{" "}
        </div>
      </div>
      <VideoConsultSlide2 className="mb-5" />
      <VideoConsultSlide3 />
      <VideoConsultSlide4 />
      {/* -----------4th container-------------------------------------------------------------------------------------- */}
      <h2>How it Works</h2>
      <div className="container d-flex justify-content-center flex-wrap mb-5 ">
        <div>
          <i class="bi bi-cursor"></i>
          <p>Select a speciality or symptom</p>
        </div>

        <div className="horizontial-line"></div>
        <div>
          <i class="bi bi-chat-right-text"></i>
          <p>Audio/ video call with a verified doctor</p>
        </div>

        <div className="horizontial-line"></div>
        <div>
          <i class="bi bi-prescription"></i>
          <p>Get a digital prescription & a free follow-up</p>
        </div>
      </div>
      {/* -----------5th container-------------------------------------------------------------------------------------- */}
      <div className="d-flex justify-content-around flex-wrap text-light bg-black p-4   mb-5">
        <div>
          <h4>2,000000+</h4>
          <h6>Happy Users</h6>
        </div>
        <div>
          <h4>20,000+</h4>
          <h6>Verified Doctors</h6>
        </div>
        <div>
          <h4>25+</h4>
          <h6>Specialities</h6>
        </div>
        <div>
          <h4>4.5/5</h4>
          <h6>App Rating</h6>
        </div>
      </div>
      {/* -----------6th container-------------------------------------------------------------------------------------- */}
      <h2 className="container text-start mb-5">Benefits of Online Consultation</h2>
      <div className="container shadow  mb-3">
        <div className="row text-start p-4 ">
          <div className="col">
            <h4>Consult Top Doctors 24x7</h4>
            <p>Connect instantly with a 24x7 specialist or choose to video visit a particular doctor.</p>
          </div>
          <div className="col">
            <h4>Convenient and Easy</h4>
            <p>Start an instant consultation within 2 minutes or do video consultation at the scheduled time.</p>
          </div>
          <div className="col">
            <h4>100% Safe Consultations</h4>
            <p>Be assured that your online consultation will be fully private and secured.</p>
          </div>
        </div>
        <div className="row text-start p-4">
          <div className="col">
            <h4>Similar Clinic Experience</h4>
            <p>Experience clinic-like consultation through a video call with the doctor. Video consultation is available only on the Practo app.</p>
          </div>
          <div className="col">
            <h4>Free Follow-up</h4>
            <p>Get a valid digital prescription and a 7-day, free follow-up for further clarifications.</p>
          </div>
          <div className="col"></div>
        </div>
      </div>
      {/* -----------7th container-------------------------------------------------------------------------------------- */}
      <h2 className="container text-start mb-3">Experience online doctor consultations</h2>

      <div className="container">
        <div className="content">
          <div className="m-3">
            <Card style={{ width: "25rem" }}>
              <iframe src="https://www.youtube.com/embed/QbUqZ3_9DKs" title="myFrame" style={{ width: "25rem", height: "20rem" }}></iframe>
              <Card.Body>
                <Card.Title>#HelloDoctor Consult a doctor online </Card.Title>
              </Card.Body>
            </Card>
          </div>
          <div className="m-3">
            <Card style={{ width: "25rem" }}>
              <iframe src="https://www.youtube.com/embed/QbUqZ3_9DKs" title="myFrame" style={{ width: "25rem", height: "20rem" }}></iframe>
              <Card.Body>
                <Card.Title>#HelloDoctor Consult a doctor online </Card.Title>
              </Card.Body>
            </Card>
          </div>
          <div className="m-3">
            <Card style={{ width: "25rem" }}>
              <iframe src="https://www.youtube.com/embed/QbUqZ3_9DKs" title="myFrame" style={{ width: "25rem", height: "20rem" }}></iframe>
              <Card.Body>
                <Card.Title>Video Consult with Top Doctors Online</Card.Title>
              </Card.Body>
            </Card>
          </div>
          <div className="m-3">
            <Card style={{ width: "25rem" }}>
              <iframe src="https://www.youtube.com/embed/QbUqZ3_9DKs" title="myFrame" style={{ width: "25rem", height: "20rem" }}></iframe>
              <Card.Body>
                <Card.Title>Video Consult with Top Doctors Online</Card.Title>
              </Card.Body>
            </Card>
          </div>
          <div className="m-3">
            <Card style={{ width: "25rem" }}>
              <iframe src="https://www.youtube.com/embed/QbUqZ3_9DKs" title="myFrame" style={{ width: "25rem", height: "20rem" }}></iframe>
              <Card.Body>
                <Card.Title>Video Consult with Top Doctors Online</Card.Title>
              </Card.Body>
            </Card>
          </div>

          <div className="m-3">
            <Card style={{ width: "25rem" }}>
              <iframe src="https://www.youtube.com/embed/QbUqZ3_9DKs" title="myFrame" style={{ width: "25rem", height: "20rem" }} s></iframe>
              <Card.Body>
                <Card.Title>Video Consult with Top Doctors Online</Card.Title>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
      {/* -----------8th container-------------------------------------------------------------------------------------- */}
      <VideoConsultSlide5 />
      {/* -----------9th container-------------------------------------------------------------------------------------- */}
      <h2 className="container text-start mb-5">FAQs</h2>
      <div className="container shadow  mb-3">
        <div className="row text-start p-4 ">
          <div className="col">
            <h4>What is online doctor consultation?</h4>
            <ReadMore1 />
            {/* <p>
              Online doctor consultation or online medical consultation is a method to connect patients and doctors virtually. It is a convenient and easy way
              to get online doctor advice using doctor apps or telemedicine apps or platforms, and the internet.
            </p> */}
          </div>
          <div className="col">
            <h4>How do I start online consultation with doctors on Practo?</h4>
            <ReadMore2 />
            {/* <p>
              Starting an online doctor consultation is very simple on Practo. Follow these 4 simple steps: • Choose your health concern • Connect with a doctor
              within 2 minutes • Ask your queries to the doctor via audio or video call • Get a valid online doctor prescription and a 3-day free online doctor
              consultation
            </p> */}
          </div>
        </div>
        <div className="row text-start p-4">
          <div className="col">
            <h4>Are your online doctors qualified?</h4>
            <ReadMore3 />

            {/* <p>
              We follow a strict verification process for every doctor providing online medical services on Practo. Our team manually verifies necessary
              documents, registrations, and certifications for every doctor.
            </p> */}
          </div>
          <div className="col">
            <h4>Is online doctor consultation safe and secured on Practo?</h4>
            <ReadMore4 />
            {/* <p>
              The privacy of our patients is critical to us, and thus, we are compliant with industry standards like ISO 27001. Rest assured that your online
              consultation with a doctor is completely safe and secured with 256-bit encryption.
            </p> */}
          </div>
        </div>
        <div className="row text-start p-4">
          <div className="col">
            <h4>What happens if I dont get a response from a doctor?</h4>
            <ReadMore5 />
            {/* <p>In the unlikely event that an online doctor does not respond, you will be entitled to a 100% refund.</p> */}
          </div>
          <div className="col">
            <h4>Can I do a free online doctor consultation on Practo?</h4>
            <ReadMore6 />
            {/* <p>
              Avail a free online consultation with top doctors in India during the India Health Hour. Click here for more details. We have the free questions
              service available on our health app only. Ask a question and get free online medical advice within 24 to 48 hours.
            </p> */}
          </div>
        </div>
      </div>
      {/* -----------9th container-------------------------------------------------------------------------------------- */}
      <div className="d-flex justify-content-around bg-dark  p-5">
        <div className="text-light">
          <h3>Still delaying your health concerns ?</h3>
          <h6>Connect with India's top doctors online</h6>
        </div>

        <div>
          <Button variant="info text-light px-5 m-2 fw-bold  fs-5 float-start ">Consult Now</Button>
        </div>
      </div>
      {/* -----------10th container-------------------------------------------------------------------------------------- */}
      <div className="bg-light">
        <Container>
          <div className="d-flex flex-wrap justify-content-around">
            <div>
              <img src={image2} style={{ height: "500px" }} alt="" />
            </div>
            <div>
              <p className=" text-start fw-bold fs-1">Download the Practo app</p>
              <p className=" text-start fw-bold fs-5">Get ₹200 HealthCash Video consult with Doc</p>
              <p className="text-start">
                <i className="bi bi-check2 fs-5 text-info p-1"></i>Video consult with Doctors
              </p>
              <p className="text-start">
                <i className="bi bi-check2 fs-5 text-info p-1"></i>Live medicine order tracking
              </p>
              <p className="text-start">
                <i className="bi bi-check2 fs-5 text-info p-1"></i>Exclusive healthcare packages
              </p>
              <p className="text-start">
                <i className="bi bi-check2 fs-5 text-info p-1"></i>Ask free questions
              </p>
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
      </div>
      {/* -----------11th container-------------------------------------------------------------------------------------- */}
      <Container>
        <p style={{ fontSize: "12px" }} className="text-start">
          Looking for a trusted & secured online dr consultation in India?
          <br /> Consult a doctor online on Practo for any health concern. Our pool of over 20,000 trusted doctors across 25+ specialties will ensure all your
          health queries are answered. You can get online dr advice from a Psychiatrist, Dermatologist, Gynecologist, Sexologist, Pediatrician, Cardiologist,
          Neurologist, Gastroenterologist, Urologist, Endocrinologist, Dentist, Psychologist, and many more. Video consultation with a doctor is available only
          on Practo's online doctor app. <br /> Practo serves customers in the following cities: Bangalore, Mumbai, Delhi, Kolkata, Hyderabad, Chennai, Pune,
          Ahmedabad, Gurgaon and Ghaziabad. <br />
          Recently Answered Questions: Having IBS since 2016 | Enlarged Rigth ovary | Skin issue | Erectile dysfunction | Carbohydrates | Muccocele removal |
          Exercise for one side neck pain | Irregular heartbeat Topics: Looking for weight gain tips? | Worried about chest pain? | Want to get rid of dark
          circles? | How to use prega news kit? | Need some weight loss advice? | Work, family or relationship stress? | Looking to improve digestion? | Painful
          kidney stones? | Need some sexual advice? | Want to learn how to last longer? | Seek help for lower back pain | Need some advice for irregular
          periods? | Ask how you can relieve throat pain | Need help with frequent urination? | Have trouble breathing? | Need some dental advice? | Want to get
          rid of acne scars? | Stomach pain bothering you? | Doubts about periods? <br /> Specialities: Ask A Psychiatrist | Ask A Dermatologist | Ask A
          Sexologist | Ask A Gynecologist | Ask A General Physician Doctor | Ask A Pediatrician Doctor | Ask An Ear Nose Throat Doctor | Ask A Kidney Urine
          Doctor | Ask An Orthopedic Doctor | Ask A Neurologist Doctor
        </p>
      </Container>
    </div>
  );
};

export default VideoConsult;

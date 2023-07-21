import React from "react";
import InputGroup from "react-bootstrap/InputGroup";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Carousel from "react-bootstrap/Carousel";
import CarouselItem from "react-bootstrap/CarouselItem";

import "../Navbar/FindDoctors.css";
import Button from "react-bootstrap/Button";
import image from "../Navbar/images/security_1.webp";
import image1 from "../Navbar/images/security_2.webp";
import image2 from "../Navbar/images/security_3.webp";
import image3 from "../Navbar/images/security_4.webp";
import image4 from "../Navbar/images/security_5.webp";
import image5 from "../Navbar/images/appointment.700ce682eaec91bf93b6574cb8f09cd0.webm";
import image6 from "../Navbar/images/consult.099446892618434cc8a038d7844c4380.webm";
import image7 from "../Navbar/images/order.c84fc07b0be8a7e8d4db432eb4e606a2.svg";
import image8 from "../Navbar/images/record.bfc5241f9b15340a32c98eb360d1005a.svg";
import image9 from "../Navbar/images/provider.webp";
import image10 from "../Navbar/images/download.webp";
import image11 from "../Navbar/images/th.jpg";
import image12 from "../Navbar/images/wp4214707.webp";
import image13 from "../Navbar/images/ph.jpg";
import image14 from "../Navbar/images/ind.jpg";
import image15 from "../Navbar/images/brazil.jpg";
const FindDoctors = () => {
  return (
    <div>
      {/* -----------2nd container--------------------------------------------------------------------------------*/}
      <div className="consult-d">
        <h2 className="text-light  p-5">Your home for health</h2>
        <h5 className="text-light">Find and Book</h5>
        <div>
          <Container>
            <div>
              <InputGroup size="sm" className="mb-3">
                <InputGroup.Text className="p-3 bg-light">
                  <i className="bi bi-geo-alt "></i>
                </InputGroup.Text>
                <Form.Control aria-label="Last name" placeholder="BANGLORE" />
                <InputGroup.Text className="p-3 bg-light">
                  <i className="bi bi-search"></i>
                </InputGroup.Text>
                <Form.Control aria-label="Last name" placeholder="Search doctors,clinics,hospitals..." />
              </InputGroup>
            </div>
            <div className="d-flex flex-wrap justify-content-evenly mb-5 ">
              <div>
                <p>
                  <a href="/# " className="text-decoration-none text-secondary">
                    Popular searches:
                  </a>
                </p>
              </div>
              <div>
                <p>
                  <a href="/# " className="text-decoration-none text-secondary">
                    Dermatologist
                  </a>
                </p>
              </div>
              <div>
                <p>
                  <a href="/# " className="text-decoration-none text-secondary">
                    Pediatrician
                  </a>
                </p>
              </div>
              <div>
                <p>
                  <a href="/# " className="text-decoration-none text-secondary">
                    Gynecologist/Obstetrician
                  </a>
                </p>
              </div>
              <div>
                <p>
                  <a href="/# " className="text-decoration-none text-secondary">
                    Others
                  </a>
                </p>
              </div>
            </div>
          </Container>
          <div className="d-flex flex-wrap justify-content-evenly text-secondary p-3 consult-doc">
            <div>
              <i className="bi bi-chat-square-text"></i>
              <p>
                <a href="/# " className="text-decoration-none text-secondary">
                  Consult with a doctor
                </a>
              </p>
            </div>
            <div className="VL bg-secondary"></div>

            <div>
              <i className="bi bi-cart2"></i>
              <p>
                <a href="/# " className="text-decoration-none text-secondary">
                  Order Medicines
                </a>
              </p>
            </div>
            <div className="VL bg-secondary"></div>

            <div>
              <i className="bi bi-prescription2"></i>
              <p>
                <a href="/# " className="text-decoration-none text-secondary">
                  View medical records
                </a>
              </p>
            </div>
            <div className="VL bg-secondary"></div>

            <div>
              <i className="bi bi-droplet me-1"></i>
              <span className="badge bg-success border-light border border-light ">New</span>
              <p>
                <a href="/# " className="text-decoration-none text-secondary">
                  Book test
                </a>
              </p>
            </div>
            <div className="VL bg-secondary"></div>

            <div>
              <i className="bi bi-book"></i>
              <p>
                <a href="/# " className="text-decoration-none text-secondary">
                  Read articles
                </a>
              </p>
            </div>
            <div className="VL bg-secondary"></div>

            <div>
              <i className="bi bi-briefcase"></i>
              <p>
                <a href="/# " className="text-decoration-none text-secondary">
                  For Healthcare provider
                </a>
              </p>
            </div>
            <div className="VL bg-secondary"></div>
          </div>
        </div>
      </div>

      {/* -----------2nd container-------------------------------------------------------------------------------------- */}
      <div className="d-flex flex-wrap justify-content-around bg-light p-5 ">
        <div>
          <p className="text-start fs-1">Safety of your data is our</p>
          <p className=" text-start fw-bold fs-1">top priority.</p>
          <p className="text-start">
            <i className="bi bi-check2 fs-5 text-info p-1"></i>Multi-level security checks
          </p>
          <p className="text-start">
            <i className="bi bi-check2 fs-5 text-info p-1"></i>Multiple data backups
          </p>
          <p className="text-start">
            <i className="bi bi-check2 fs-5 text-info p-1"></i>Stringent data privacy policies
          </p>
          <Button variant="info text-light p-2 m-2 float-start">Read More</Button>
        </div>
        <div>
          <img src={image} style={{ width: "300px", height: "300px" }} alt="" />
        </div>
      </div>
      <div className="d-flex flex-wrap justify-content-evenly mb-5 bg-light p-5  ">
        <div style={{ width: "100px", height: "100px" }} className="mb-2">
          <img src={image1} alt="" />
          <p>256-bit encryption</p>
        </div>
        <div style={{ width: "100px", height: "100px" }} className="mb-2">
          <img src={image2} alt="" />
          <p>ISO 27001 certified</p>
        </div>
        <div style={{ width: "100px", height: "100px" }} className="mb-2">
          <img src={image3} alt="" />
          <p>HIPAA compliant data centers</p>
        </div>
        <div style={{ width: "100px", height: "100px" }} className="mb-2">
          <img src={image4} alt="" />
          <p>DSCI member</p>
        </div>
      </div>

      {/* -----------3nd container-------------------------------------------------------------------------------------- */}

      <Container>
        <div className="d-flex flex-wrap justify-content-around p-5 ">
          <div>
            <p className="text-start fs-1">Instant appointment with</p>
            <p className=" text-start fw-bold fs-1">doctors.Guaranteed.</p>
            <p className="text-start">
              <i className="bi bi-check2 fs-5 text-info p-1"></i>100,000 Verified doctors
            </p>
            <p className="text-start">
              <i className="bi bi-check2 fs-5 text-info p-1"></i>3M+ Patient recommendations
            </p>
            <p className="text-start">
              <i className="bi bi-check2 fs-5 text-info p-1"></i>25M Patients/year
            </p>
            <Button variant="info text-light p-2 m-2 float-start">Find me right doctors</Button>
            <Carousel variant="dark ">
              <CarouselItem>
                <i className="bi bi-star-fill text-success m-1"></i>
                <i className="bi bi-star-fill text-success m-1"></i>
                <i className="bi bi-star-fill text-success m-1"></i>
                <i className="bi bi-star-fill text-success m-1"></i>
                <i className="bi bi-star-fill text-success m-1"></i>
                <p style={{ fontSize: "12px", padding: "30px" }}>
                  Very easy to book,maintain history. Hassle free from older versions of booking appointment via telephone.. Thanks Practo for making it simple.{" "}
                </p>
                <span>
                  <i className="bi bi-person-circle p-1 "></i>
                  <span>sherma</span>
                </span>
              </CarouselItem>
              <CarouselItem>
                <i className="bi bi-star-fill text-success m-1"></i>
                <i className="bi bi-star-fill text-success m-1"></i>
                <i className="bi bi-star-fill text-success m-1"></i>
                <i className="bi bi-star-fill text-success m-1"></i>
                <i className="bi bi-star-fill text-success m-1"></i>
                <p style={{ fontSize: "12px", padding: "30px" }}>
                  Very helpful. Far easier than doing same things on computer. Allows quick and easy search with speedy booking. Even maintains history of
                  doctors visited.
                </p>
                <span>
                  <i className="bi bi-person-circle p-1 "></i>
                  <span>deepti</span>
                </span>
              </CarouselItem>
              <CarouselItem>
                <i className="bi bi-star-fill text-success m-1"></i>
                <i className="bi bi-star-fill text-success m-1"></i>
                <i className="bi bi-star-fill text-success m-1"></i>
                <i className="bi bi-star-fill text-success m-1"></i>
                <i className="bi bi-star-fill text-success m-1"></i>
                <p style={{ fontSize: "12px", padding: "30px" }}>
                  I had severe pain in chest as well blood in cough. I searched through a lot of pulmonologists based on rankings and feedbacks and finally
                  settled to consult Dr Indu Bubna. She quickly diagnosed my disease as pulmonary embolism and I was admitted to ICU. Now its all fine. If i
                  would have gotten late then I wouldn't be writing this. Thanks Practo!.
                </p>
                <span>
                  <i className="bi bi-person-circle p-1 "></i>
                  <span>silvha</span>
                </span>
              </CarouselItem>
              <CarouselItem>
                <i className="bi bi-star-fill text-success m-1"></i>
                <i className="bi bi-star-fill text-success m-1"></i>
                <i className="bi bi-star-fill text-success m-1"></i>
                <i className="bi bi-star-fill text-success m-1"></i>
                <i className="bi bi-star-fill text-success m-1"></i>
                <p style={{ fontSize: "12px", padding: "30px" }}>
                  Great app..get to know actual qualification of doctors n their alma mater n experience to judge the background..along with peoples
                  review...have stopped calling n taking appointments..just practo it.
                </p>
                <span>
                  <i className="bi bi-person-circle p-1 "></i>
                  <span>jay jai</span>
                </span>
              </CarouselItem>
            </Carousel>
          </div>
          <div>
            <video width="250" height="280" controls loading="false" autoPlay loop>
              <source src={image5} type="video/webm" />
            </video>
          </div>
        </div>
        <div className="d-flex flex-wrap justify-content-evenly mb-5  ">
          <div className="text-secondary">
            <h2 className="fortune">FORTUNE</h2>
          </div>
          <div className="text-secondary">
            <h5 className="tech">
              Tech<span className="crunch">Crunch</span>
            </h5>
          </div>
          <div className="text-secondary">
            <h4 className="forbes">Forbes</h4>
          </div>
          <div className="text-secondary">
            <h4 className="theeconomic">THE Economic Times</h4>
          </div>
          <div className="text-secondary">
            <h3 className="thewallstreet">THE WALL STREET JOURNAL</h3>
          </div>
          <div className="text-secondary">
            <h6 className="thetimes">THE TIMES OF INDIA </h6>
          </div>
        </div>
      </Container>

      {/* -----------4nd container-------------------------------------------------------------------------------------- */}
      <div className="bg-light">
        <Container>
          <div className="d-flex flex-wrap justify-content-around p-5   ">
            <div>
              <video width="250" height="280" controls loading="false" autoPlay loop>
                <source src={image6} type="video/webm" />
              </video>
            </div>
            <div>
              <p className="text-start fs-1">Skip the waiting room.</p>
              <p className=" text-start fw-bold fs-1">Consult with a doctor</p>
              <p className="text-start">
                <i className="bi bi-check2 fs-5 text-info p-1"></i>Fees starting at ₹99
              </p>
              <p className="text-start">
                <i className="bi bi-check2 fs-5 text-info p-1"></i>Verified doctors respond in 5 minutes
              </p>
              <p className="text-start">
                <i className="bi bi-check2 fs-5 text-info p-1"></i>100% Private and confidential
              </p>
              <Button variant="info text-light p-2 m-2 float-start">Consult now</Button>
              <span className="spinner-grow bg-info spinner-grow-sm " role="status"></span>
              <span className="p-2">
                <span className="text-info">67334</span> doctors online
              </span>
            </div>
            <Carousel variant="dark  " className="float-right">
              <CarouselItem>
                <i className="bi bi-star-fill text-success m-1"></i>
                <i className="bi bi-star-fill text-success m-1"></i>
                <i className="bi bi-star-fill text-success m-1"></i>
                <i className="bi bi-star-fill text-success m-1"></i>
                <i className="bi bi-star-fill text-success m-1"></i>
                <p style={{ fontSize: "12px", padding: "30px" }}>
                  Very easy to book,maintain history. Hassle free from older versions of booking appointment via telephone.. Thanks Practo for making it simple.{" "}
                </p>
                <span>
                  <i className="bi bi-person-circle p-1 "></i>
                  <span>sherma</span>
                </span>
              </CarouselItem>
              <CarouselItem>
                <i className="bi bi-star-fill text-success m-1"></i>
                <i className="bi bi-star-fill text-success m-1"></i>
                <i className="bi bi-star-fill text-success m-1"></i>
                <i className="bi bi-star-fill text-success m-1"></i>
                <i className="bi bi-star-fill text-success m-1"></i>
                <p style={{ fontSize: "12px", padding: "30px" }}>
                  Very helpful. Far easier than doing same things on computer. Allows quick and easy search with speedy booking. Even maintains history of
                  doctors visited.
                </p>
                <span>
                  <i className="bi bi-person-circle p-1 "></i>
                  <span>deepti</span>
                </span>
              </CarouselItem>
              <CarouselItem>
                <i className="bi bi-star-fill text-success m-1"></i>
                <i className="bi bi-star-fill text-success m-1"></i>
                <i className="bi bi-star-fill text-success m-1"></i>
                <i className="bi bi-star-fill text-success m-1"></i>
                <i className="bi bi-star-fill text-success m-1"></i>
                <p style={{ fontSize: "12px", padding: "30px" }}>
                  I had severe pain in chest as well blood in cough. I searched through a lot of pulmonologists based on rankings and feedbacks and finally
                  settled to consult Dr Indu Bubna. She quickly diagnosed my disease as pulmonary embolism and I was admitted to ICU. Now its all fine. If i
                  would have gotten late then I wouldn't be writing this. Thanks Practo!.
                </p>
                <span>
                  <i className="bi bi-person-circle p-1 "></i>
                  <span>silvha</span>
                </span>
              </CarouselItem>
              <CarouselItem>
                <i className="bi bi-star-fill text-success m-1"></i>
                <i className="bi bi-star-fill text-success m-1"></i>
                <i className="bi bi-star-fill text-success m-1"></i>
                <i className="bi bi-star-fill text-success m-1"></i>
                <i className="bi bi-star-fill text-success m-1"></i>
                <p style={{ fontSize: "12px", padding: "30px" }}>
                  Great app..get to know actual qualification of doctors n their alma mater n experience to judge the background..along with peoples
                  review...have stopped calling n taking appointments..just practo it.
                </p>
                <span>
                  <i className="bi bi-person-circle p-1 "></i>
                  <span>jay jai</span>
                </span>
              </CarouselItem>
            </Carousel>
          </div>
        </Container>
      </div>

      {/* -----------5nd container-------------------------------------------------------------------------------------- */}

      <Container>
        <div className="d-flex justify-content-center flex-wrap">
          <div>
            <p className="text-start fs-1">Get all your medicines.</p>
            <p className=" text-start fw-bold fs-1">Everytime. On time.</p>
            <p className="text-start">
              <i className="bi bi-check2 fs-5 text-info p-1"></i>Guaranteed availability
            </p>
            <p className="text-start">
              <i className="bi bi-check2 fs-5 text-info p-1"></i> Over 130,000+ genuine medicines
            </p>
            <p className="text-start">
              <i className="bi bi-check2 fs-5 text-info p-1"></i>Home delivery in 24hrs
            </p>
            <Button variant="info text-light p-2 m-2 float-start">Order Medicines</Button>
            <span className="spinner-grow bg-info spinner-grow-sm " role="status"></span>
            <span className="p-2">Last order delivered 1 hour 33 mins ago in Uppal, Hyderabad</span>
            <Carousel variant="dark  " className="float-right">
              <CarouselItem>
                <p style={{ fontSize: "12px", padding: "30px" }}>
                  Very Helpful! I hope a lot more doctors come onboard soon.The Doctor's tool is also very helpful, apart from the app.The prescriptions are all
                  on mail, and messages, which makes things very easy to use and track. Great job overall!{" "}
                </p>
                <span>
                  <i className="bi bi-person-circle p-1 "></i>
                  <span>sherma</span>
                </span>
              </CarouselItem>
              <CarouselItem>
                <p style={{ fontSize: "12px", padding: "30px" }}>
                  Excellent service, App is user friendly compared to other similar agencies. Text message to customers at each stage from placing order to
                  delivery is very informative.
                </p>
                <span>
                  <i className="bi bi-person-circle p-1 "></i>
                  <span>deepti</span>
                </span>
              </CarouselItem>
              <CarouselItem>
                <p style={{ fontSize: "12px", padding: "30px" }}>
                  Extremely happy and satisfied with the service of Practo medicines delivery. Prompt response and delivery was made 1 day ahead of due date. A
                  special mention goes to Siddesh, the pharmacist for faster delivery. Keep up the good work, Practo!!
                </p>
                <span>
                  <i className="bi bi-person-circle p-1 "></i>
                  <span>silvha</span>
                </span>
              </CarouselItem>
              <CarouselItem>
                <p style={{ fontSize: "12px", padding: "30px" }}>
                  The executive who delivered the Medicine was kind he even waited for more than 20 mins and was still smiling and happy.... Awesome Practo for
                  having people who like doing what they do...
                </p>
                <span>
                  <i className="bi bi-person-circle p-1 "></i>
                  <span>jay jai</span>
                </span>
              </CarouselItem>
            </Carousel>
          </div>

          <div>
            <img src={image7} alt="" />
          </div>
        </div>
      </Container>
      {/* -----------6nd container-------------------------------------------------------------------------------------- */}
      <div className="bg-light">
        <Container>
          <div className="d-flex justify-content-center flex-wrap">
            <div>
              <img src={image8} alt="" />
            </div>
            <div>
              <p className="text-start fs-1">All your medical records</p>
              <p className=" text-start fw-bold fs-1">In one secure app.</p>
              <p className="text-start">
                <i className="bi bi-check2 fs-5 text-info p-1"></i>256-bit end to end encryption
              </p>
              <p className="text-start">
                <i className="bi bi-check2 fs-5 text-info p-1"></i>Records are accessible only by you
              </p>
              <p className="text-start">
                <i className="bi bi-check2 fs-5 text-info p-1"></i>Access your records across 8000+ centers
              </p>
              <Button variant="info text-light p-2 m-2 float-start">Find out more</Button>
            </div>
          </div>
        </Container>
      </div>
      {/* -----------7nd container-------------------------------------------------------------------------------------- */}
      <Container>
        <div className="d-flex justify-content-center flex-wrap p-5">
          <div>
            <p className="text-start fs-1">Leading Healthcare Providers.</p>
            <p className=" text-start fw-bold fs-1">Trust us for Business</p>
            <p className="text-start">
              <i className="bi bi-check2 fs-5 text-info p-1"></i>Get seen by 25M+ patients on Practo.com
            </p>
            <p className="text-start">
              <i className="bi bi-check2 fs-5 text-info p-1"></i> The most advanced software for clinics and hospitals
            </p>
            <p className="text-start">
              <i className="bi bi-check2 fs-5 text-info p-1"></i>State of the art business analytics for enterprises
            </p>
            <Button variant="info text-light p-2 m-2 ">Learn More</Button>
            <p>
              <i className="bi bi-star-fill text-success m-1"></i>
              <i className="bi bi-star-fill text-success m-1"></i>
              <i className="bi bi-star-fill text-success m-1"></i>
              <i className="bi bi-star-fill text-success m-1"></i>
              <i className="bi bi-star-fill text-success m-1"></i>
            </p>
            <p style={{ fontSize: "12px", width: "420px" }}>
              I had severe pain in chest as well blood in cough. I searched through a lot of pulmonologists based on rankings and feedbacks and finally settled
              to consult Dr Indu Bubna. She quickly diagnosed my disease as pulmonary embolism and I was admitted to ICU. Now its all fine. If i would have
              gotten late then I wouldn't be writing this. Thanks Practo!.
            </p>
            <span>
              <i className="bi bi-person-circle p-1 "></i>
              <span>silvha</span>
            </span>
          </div>

          <div>
            <img src={image9} alt="" className="leadinghealth" />
          </div>
        </div>
      </Container>
      {/* -----------7nd container-------------------------------------------------------------------------------------- */}
      <div className="bg-light">
        <Container>
          <div className="d-flex flex-wrap justify-content-around">
            <div>
              <img src={image10} style={{ height: "500px" }} alt="" />
            </div>
            <div>
              <p className=" text-start fw-bold fs-1">Download the Practo app</p>
              <p className="text-start">
                <i className="bi bi-check2 fs-5 text-info p-1"></i>Book appointments and lab tests
              </p>
              <p className="text-start">
                <i className="bi bi-check2 fs-5 text-info p-1"></i>Order medicines
              </p>
              <p className="text-start">
                <i className="bi bi-check2 fs-5 text-info p-1"></i>Consult doctors online
              </p>
              <p className="text-start">
                <i className="bi bi-check2 fs-5 text-info p-1"></i>Set medicine reminders
              </p>
              <p className="text-start">
                <i className="bi bi-check2 fs-5 text-info p-1"></i>Store health records
              </p>
              <p className="text-start">
                <i className="bi bi-check2 fs-5 text-info p-1"></i>Read health tips
              </p>
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
      {/* -----------8th container-------------------------------------------------------------------------------------- */}
      <div className=" d-flex justify-content-center flex-wrap p-2 m-2">
        <div className="me-5 ">
          <img src={image11} style={{ width: "25px", height: "20px", margin: "10px" }} />

          <span>India</span>
        </div>
        <div className="me-5 ">
          <img src={image12} style={{ width: "25px", height: "20px", margin: "10px" }} />

          <span>singapore</span>
        </div>
        <div className="me-5 ">
          <img src={image13} style={{ width: "25px", height: "20px", margin: "10px" }} />

          <span>Philippines</span>
        </div>
        <div className="me-5 ">
          <img src={image14} style={{ width: "25px", height: "20px", margin: "10px" }} />

          <span>Indonesia</span>
        </div>

        <div className="me-5 ">
          <img src={image15} style={{ width: "25px", height: "20px", margin: "10px" }} />
          <span>Brazil</span>
        </div>
      </div>
    </div>
  );
};

export default FindDoctors;

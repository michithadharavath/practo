import React from "react";

import "./footer.css";
const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div className="footer-c">
      <div className="d-flex flex-wrap justify-content-around   p-5 ">
        <div className="text-start">
          <div>
            <a href="/about" className="hover fs-5 fw-bold  text-light ">
              About
            </a>
          </div>
          <div>
            <a href="/Blog" className="hover text-light">
              Blog
            </a>
          </div>
          <div>
            <a href="/Careers" className="hover text-light">
              Careers
            </a>
          </div>
          <div>
            <a href="/Press" className="hover text-light">
              Press
            </a>
          </div>
          <div>
            <a href="/ContactUs" className="hover text-light">
              Contact Us
            </a>
          </div>
        </div>
        <div className="text-start">
          <div>
            <a href="/Forpatients" className="hover fs-5 fw-bold text-light">
              For patients
            </a>
          </div>
          <div>
            <a href="/freehealth" className="hover text-light">
              Ask free health questions
            </a>
          </div>
          <div>
            <a href="/Searchfordoctors" className="hover text-light">
              Search for doctors
            </a>
          </div>
          <div>
            <a href="/Searchforclinics" className="hover text-light">
              Search for clinics
            </a>
          </div>
          <div>
            <a href="/Searchforhospitals" className="hover text-light">
              Search for hospitals
            </a>
          </div>
          <div>
            <a href="/BookDiagnosticTests" className="hover text-light">
              Book Diagnostic Tests
            </a>
          </div>
          <div>
            <a href="/BookFullBodycheckups" className="hover text-light">
              Book Full Body checkups
            </a>
          </div>
          <div>
            {" "}
            <a href="/Readhealtharticles" className="hover text-light">
              Read health articles
            </a>
          </div>
          <div>
            <a href="/Consultadoctor" className="hover text-light">
              Consult a doctor
            </a>
          </div>
          <div>
            <a href="/Ordermedicines" className="hover text-light">
              Order medicines
            </a>
          </div>
          <div>
            {" "}
            <a href="/Readaboutmediciens" className="hover text-light">
              Read about mediciens
            </a>
          </div>
          <div>
            <a href="/#" className="hover text-light">
              Practo drive
            </a>
          </div>
          <div>
            <a href="/#" className="hover text-light">
              Health app
            </a>
          </div>
          <div>
            <a href="/#" className="hover text-light">
              Practo plus
            </a>
          </div>
        </div>
        <div className="text-start">
          <div>
            <a href="/#" className="hover fs-5 fw-bold text-light">
              For doctors
            </a>
          </div>
          <div>
            <a href="/#" className="hover  text-light">
              Practo Consult
            </a>
          </div>
          <div>
            <a href="/#" className="hover text-light">
              Practo Health Feed
            </a>
          </div>
          <div>
            <a href="/#" className="hover text-light">
              Practo Profile
            </a>
          </div>
        </div>
        <div className="text-start">
          <div>
            <a href="/#" className="hover fs-5 fw-bold text-light">
              For clinics
            </a>
          </div>
          <div>
            <a href="/#" className="hover text-light">
              Practo prime
            </a>
          </div>
          <div>
            <a href="/#" className="hover text-light">
              Ray by Practo
            </a>
          </div>
          <div>
            <a href="/#" className="hover text-light">
              Practo Reach
            </a>
          </div>
          <div>
            <a href="/#" className="hover text-light">
              Ray Tab
            </a>
          </div>
          <div>
            <a href="/#" className="hover text-light">
              Practo PRO
            </a>
          </div>
        </div>
        <div className="text-start">
          <div>
            <a href="/#" className="hover fs-5 fw-bold text-light">
              For hospitals
            </a>
          </div>
          <div>
            <a href="/#" className="hover text-light">
              Insta by Practo
            </a>
          </div>
          <div>
            <a href="/#" className="hover text-light">
              Qikwell by Practo
            </a>
          </div>
          <div>
            <a href="/#" className="hover text-light">
              Practo Profile
            </a>
          </div>
          <div>
            <a href="/#" className="hover text-light">
              Practo Reach
            </a>
          </div>
          <div>
            <a href="/#" className="hover text-light">
              Practo Drive
            </a>
          </div>
        </div>
        <div className="text-start">
          <div>
            <a href="/#" className="hover fs-5 fw-bold text-light">
              More
            </a>
          </div>
          <div>
            <a href="/#" className="hover text-light">
              Help
            </a>
          </div>
          <div>
            <a href="/#" className="hover text-light">
              Developers
            </a>
          </div>
          <div>
            <a href="/#" className="hover text-light">
              Privacy Policy
            </a>
          </div>
          <div>
            <a href="/#" className="hover text-light">
              Terms 4 condition
            </a>
          </div>
          <div>
            <a href="/#" className="hover text-light">
              PCS T&C
            </a>
          </div>
          <div>
            <a href="/#" className="hover text-light">
              Healthcare Directory
            </a>
          </div>
          <div>
            <a href="/#" className="hover text-light">
              Practo health Wiki
            </a>
          </div>
        </div>
        <div className="text-start">
          <div>
            <a href="/#" className="hover fs-5 fw-bold text-light">
              Social
            </a>
          </div>
          <div>
            <a href="/#" className="hover text-light">
              Facebook
            </a>
          </div>
          <div>
            <a href="/#" className="hover text-light">
              Twitter
            </a>
          </div>
          <div>
            <a href="/#" className="hover text-light">
              Linkedin
            </a>
          </div>
          <div>
            <a href="/#" className="hover text-light">
              Youtube
            </a>
          </div>
          <div>
            <a href="/#" className="hover text-light">
              Github
            </a>
          </div>
        </div>
      </div>
      <div className="d-flex justify-content-center  ">
        <div className="dot"></div>
        <div className="pra text-light">Practo</div>
        <div className="dot"></div>
      </div>
      <p className="text-light ">Copyright © {currentYear},Practo. All rights reserved.</p>
    </div>
  );
};

export default Footer;

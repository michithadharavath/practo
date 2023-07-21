import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Button } from "react-bootstrap";
import "../Navbar/NavbarHeader.css";

function NavbarHeader() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="light" variant="light mb-3">
      <Container>
        <Navbar.Brand href="/practo" className=" fs-4 fw-bold  text-info ">
          Practo
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/FindDoctors">FindDoctors</Nav.Link>
            <Nav.Link href="/VideoConsult">VideoConsult</Nav.Link>
            <Nav.Link href="/Medicines">Medicines</Nav.Link>
            <Nav.Link href="/LabTests">LabTests</Nav.Link>
            <Nav.Link href="/Surgeries">Surgeries</Nav.Link>
          </Nav>
          <Nav>
            <NavDropdown title="For Coparates" id="collasible-nav-dropdown">
              <NavDropdown.Item href="/plus/Coparates">Health and Wellness Plan</NavDropdown.Item>
              <NavDropdown.Item href="/Group/Insurence">Group Insurence</NavDropdown.Item>
              <NavDropdown.Item href="/something">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/separated">Separated link</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="For providers" id="collasible-nav-dropdown">
              <NavDropdown.Item href="/provider/prime">Practo Prime</NavDropdown.Item>
              <NavDropdown.Item href="/provider">Software for providers</NavDropdown.Item>
              <NavDropdown.Item href="/providers/clinics/profile">List your practise for free</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/providers/abdm"> ABDM</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Security & help" id="collasible-nav-dropdown">
              <NavDropdown.Item href="/company/security">Data Security</NavDropdown.Item>
              <NavDropdown.Item href="/belp">Help </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="/Arigister">
              {" "}
              <Button variant="outline-secondary">signin/Login</Button>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarHeader;

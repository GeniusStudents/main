import React from "react";
import { Nav, Navbar, NavDropdown, Container } from "react-bootstrap";

import { Button } from "@mui/material";
import Register from "../pages/signUp/Registeration";
import Login from "../pages/login/Login";


import { useState } from "react";

export default function () {
  const [showModal, setShowModal] = useState(false);
   const [showMod,setShowMod]=useState(false)

  const handleShowModal = () => {
    setShowModal(true);
  };

  const handleSowLoginModal=()=>{
    setShowMod(true)
  }

  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
        <Container>
          <Navbar.Brand href="#home">Resume Builder </Navbar.Brand>

          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <NavDropdown
                title="Resume"
                id="collasible-nav-dropdown"
             
              >
                <NavDropdown.Item href="#action/3.1">
                  resume Builder
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Resume Sample
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  How to build Resume
                </NavDropdown.Item>
              </NavDropdown>

              <Nav.Link href="#pricing">Pricing</Nav.Link>
              <NavDropdown title="Cover Letter" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">
                  Cove Letter Builder
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Cover Letter Sample
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  How to Build Resume Builder
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Nav>
              <div style={{ marginRight: "60px" }}>
                <Button variant="text" onClick={handleSowLoginModal}>
                  Sign In
                </Button>

                <Button variant="text"  onClick={handleShowModal}>
                 sign Up
                </Button>
               
                <Login show={showMod} onHide={() => setShowMod(false)} />
                <Register show={showModal} onHide={() => setShowModal(false)} />
              </div>
            </Nav>

            <Nav>
              <Nav.Link href="#deets">FA</Nav.Link>
              <Nav.Link eventKey={2} href="#memes">
                EN
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

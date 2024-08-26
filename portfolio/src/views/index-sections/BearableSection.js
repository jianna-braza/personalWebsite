/*!

=========================================================
* Paper Kit React - v1.3.2
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-kit-react

* Copyright 2023 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/paper-kit-react/blob/main/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";

import {
  UncontrolledCollapse,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col
} from "reactstrap";

// core components

function BearableSection() {
  return (
    <>
      <Navbar className="bg-warning" expand="lg">
        <Container>
          <NavbarBrand href="#pablo" onClick={(e) => e.preventDefault()}>
          Bearable (Capstone)
          </NavbarBrand>
          <button
            aria-controls="navbarNav"
            aria-expanded={false}
            aria-label="Toggle navigation"
            className="navbar-toggler navbar-toggler-right"
            data-target="#navbar-info"
            data-toggle="collapse"
            id="navbar-info"
            type="button"
          >
            <span className="navbar-toggler-bar" />
            <span className="navbar-toggler-bar" />
            <span className="navbar-toggler-bar" />
          </button>
          <UncontrolledCollapse navbar toggler="#navbar-info">
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink
                  href="https://github.com/jianna-braza/Bearable"
                >
                  Repository
                </NavLink>
              </NavItem>
            </Nav>
          </UncontrolledCollapse>
        </Container>
      </Navbar>

      <div className="section">
        <Container>
          <Row>
            <Col lg="6" md="12">
              <h2 className="title">Task Manager Designed for people with ADHD</h2>
              <br />
              <p className="description">
              This capstone project is a continuation of a previous group's work. In a team of 5,
                we worked towards creating an all-encompassing task manager that addresses issues
                people with ADHD often encounter such as time blindness, overstimulation, and indecision.
                This application uses a minimalist design with the intention of later iterations
                 integrating customization in the background that users would earn through
                continued use of our application (which also adds as an insentive for our ADHD users
                to feel engaged with our app).
              </p>
              <br />
            </Col>
            <Col lg="6" md="12">
              <img
                alt="..."
                className="img-rounded img-responsive projectImages"
                src={require("assets/img/bearable.png")}
              />
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default BearableSection;

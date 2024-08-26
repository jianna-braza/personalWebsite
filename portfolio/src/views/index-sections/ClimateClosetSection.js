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

function ClimateClosetSection() {
  return (
    <>
      <Navbar className="climateClosetSection" expand="lg">
        <Container>
          <NavbarBrand className='textColor' href="#pablo" onClick={(e) => e.preventDefault()}>
            Climate Closet (INFO 441)
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
                <NavLink className='textColor'
                  href="https://github.com/jianna-braza/ClimateCloset"
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
              <h2 className="title">Suggesting clothes based on Seattle's weather</h2>
              <br />
              <p className="description">
                ClimateCloset is a web application designed to help users organize
                their wardrobes based on temperature. The application allows users
                to upload images of their clothing items and tag them with temperature
                categories such as hot, warm, cool, and cold. Users can then retrieve their
                clothing items based on these temperature tags.
              </p>
              <br />
            </Col>
            <Col lg="6" md="12">
              <img
                alt="..."
                className="img-rounded img-responsive projectImages"
                src={require("assets/img/ClimateCloset.png")}
              />
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default ClimateClosetSection;

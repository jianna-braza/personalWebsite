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

function BetterTomorrowSection() {
  return (
    <>
      <Navbar className="bg-info" expand="lg">
        <Container>
          <NavbarBrand href="#pablo" onClick={(e) => e.preventDefault()}>
            A Better Tomorrow (INFO 340)
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
                  href="https://github.com/info340-au22/project-makenzieedwards8"
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
              <img
                alt="..."
                className="img-rounded img-responsive projectImages"
                src={require("assets/img/betterTomorrowSmall.png")}
              />
            </Col>
            <Col lg="6" md="12">
              <h2 className="title">Forum to personally connect people in need with those that can help</h2>
              <br />
              <p className="description">
                The first project I've worked on. Aimed to create an online community by allowing
                people to connect based on the things they need and/or the resources they have to help.
                Consists of a homepage describing our mission and our team with a login feature, a
                profile creation page, and a profile viewing page with filter options to help users
                find profiles that fir under the criteria they are looking for.
              </p>
              <br />
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default BetterTomorrowSection;

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

function AquapodSection() {
  return (
    <>
      <Navbar className="bg-info" expand="lg">
        <Container>
          <NavbarBrand href="#pablo" onClick={(e) => e.preventDefault()}>
            The AquaPod (INFO 442)
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
                  href="https://github.com/UW-INFO442-AU23/aquanauts"
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

            </Col>
            <Col lg="6" md="12">
              <h2 className="title">Nucleo Icons</h2>
              <br />
              <p className="description">
                Paper Kit comes with 100 custom icons made by our friends from
                NucleoApp. The official package contains over 2.100 thin icons
                which are looking great in combination with Paper Kit Make sure
                you check all of them and use those that you like the most.
              </p>
              <br />

            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default AquapodSection;

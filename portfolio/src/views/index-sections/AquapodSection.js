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
              <img
                alt="..."
                className="img-rounded img-responsive"
                src={require("assets/img/aquanautsWebsite.png")}
              />
            </Col>
            <Col lg="6" md="12">
              <h2 className="title">King County Water Resource Locator</h2>
              <br />
              <p className="description">
                This project focuses on Goal 6 from the UN SDGS: Clean Water and Sanitation.
                This issue arises due to water resources, specifically sanitized and clean drinking
                water, are not easily accessible to the majority of people.
                Although access to water is a basic human right, the resources and supplies may not
                be publicly known, which can be a major barrier for those in need of them. Likewise,
                there are many capable people who could help donate these supplies or uncover
                services. However, many people are unaware of how they can assist in this issue.
                The app aims to serve three purposes for the people of King County, WA:
              </p>
              <ul>
                <li>Be a resource that people can use to help find clean water resources: water bottle refilling stations, water fountains, public restrooms, etc.</li>
                <li>Serve as a hub to help promote charities that people can donate to or learn more</li>
                <li>Educate users of the current state of King County and how water availability affects the community</li>
              </ul>
              <br />
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default AquapodSection;

import React from "react";
import {
  Button,
  Col,
  Container,
  Form,
  Nav,
  Navbar,
  NavDropdown,
  Row,
} from "react-bootstrap";
//import "./Navbar.css";
import logo from "../../assets/images/logo.svg";
import styles from "../../assets/variables/styles";

function AppNav() {
  return (
    <Navbar expand="lg" bg="light" variant="light" sticky="top">
      <Container fluid>
        <Navbar.Brand href="#">
          <img src={logo} alt="Logo" className="navbar-logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto my-2 my-lg-0" navbarScroll>
            <Nav.Link href="#">Home</Nav.Link>

            <NavDropdown title="About Us" id="aboutUsDropdown">
              <NavDropdown.Item href="#" style={styles.padding.half}>
                Our Story
              </NavDropdown.Item>
              <NavDropdown.Item href="#" style={styles.padding.half}>
                Vision & Mission
              </NavDropdown.Item>
              <NavDropdown.Item href="#" style={styles.padding.half}>
                Our History
              </NavDropdown.Item>
              <NavDropdown.Item href="#" style={styles.padding.half}>
                Team
              </NavDropdown.Item>
              <NavDropdown.Item href="#" style={styles.padding.half}>
                Testimonials
              </NavDropdown.Item>
            </NavDropdown>

            <NavDropdown
              className="dropdown"
              title="Programs"
              id="programsDropdown"
            >
              <NavDropdown.Item href="#" style={styles.padding.half}>
                Conservation Initiatives
              </NavDropdown.Item>
              <NavDropdown.Item href="#" style={styles.padding.half}>
                Research Projects
              </NavDropdown.Item>
              <NavDropdown.Item href="#" style={styles.padding.half}>
                Community Engagement
              </NavDropdown.Item>
              <NavDropdown.Item href="#" style={styles.padding.half}>
                Education and Outreach
              </NavDropdown.Item>
              <NavDropdown.Item href="#" style={styles.padding.half}>
                Future Programs
              </NavDropdown.Item>
              <NavDropdown.Item href="#" style={styles.padding.half}>
                Completed Programs
              </NavDropdown.Item>
            </NavDropdown>

            <Nav.Link href="#">Thematic Areas</Nav.Link>

            <NavDropdown
              className="dropdown"
              title="Our Partners"
              id="ourPartnersDropdown"
              style={styles.width.full}
            >
              <Container
                fluid
                style={(styles.width.full, styles.width.twoThirds)}
              >
                <Row style={styles.flex.row}>
                  <Col>
                    <h6>Central Africa</h6>
                    <NavDropdown.Item href="#" style={styles.padding.half}>
                      Rainforest Preservation Network
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#" style={styles.padding.half}>
                      Wildlife Rescue Alliance
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#" style={styles.padding.half}>
                      Central African Biodiversity Institute
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#" style={styles.padding.half}>
                      Community Conservation Coalition
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#" style={styles.padding.half}>
                      River Basin Protection Society
                    </NavDropdown.Item>
                  </Col>

                  {/* Eastern Africa column */}
                  <Col>
                    <h6>Eastern Africa</h6>
                    <NavDropdown.Item href="#" style={styles.padding.half}>
                      Eastern Savannah Trust
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#" style={styles.padding.half}>
                      Marine Conservation Foundation
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#" style={styles.padding.half}>
                      Forest Guardians
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#" style={styles.padding.half}>
                      Sustainable Agriculture Association
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#" style={styles.padding.half}>
                      Highland Ecosystem Network
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#" style={styles.padding.half}>
                      Wildlife Research Institute
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#" style={styles.padding.half}>
                      Eastern Africa Conservation Council
                    </NavDropdown.Item>
                  </Col>

                  {/* Southern Africa column */}
                  <Col>
                    <h6>Southern Africa</h6>
                    <NavDropdown.Item href="#" style={styles.padding.half}>
                      Southern Plains Wildlife Society
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#" style={styles.padding.half}>
                      Wildlife Tracking Organization
                    </NavDropdown.Item>
                  </Col>

                  {/* Western Africa column */}
                  <Col>
                    <h6>Western Africa</h6>
                    <NavDropdown.Item href="#" style={styles.padding.half}>
                      West African Nature Conservancy
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#" style={styles.padding.half}>
                      Coastal Preservation Initiative
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#" style={styles.padding.half}>
                      Savanna Protection Network
                    </NavDropdown.Item>
                  </Col>

                  {/* International column */}
                  <Col>
                    <h6>International</h6>
                    <NavDropdown.Item href="#" style={styles.padding.half}>
                      Global Biodiversity Alliance
                    </NavDropdown.Item>
                  </Col>
                </Row>
              </Container>
            </NavDropdown>

            <NavDropdown
              className="dropdown"
              title="Resources"
              id="resourcesDropdown"
            >
              <NavDropdown.Item href="#" style={styles.padding.half}>
                News
              </NavDropdown.Item>
              <NavDropdown.Item href="#" style={styles.padding.half}>
                Guides
              </NavDropdown.Item>
              <NavDropdown.Item href="#" style={styles.padding.half}>
                Interviews
              </NavDropdown.Item>
              <NavDropdown.Item href="#" style={styles.padding.half}>
                Publications
              </NavDropdown.Item>
              <NavDropdown.Item href="#" style={styles.padding.half}>
                Books
              </NavDropdown.Item>
              <NavDropdown.Item href="#" style={styles.padding.half}>
                Podcasts
              </NavDropdown.Item>
            </NavDropdown>

            <Nav.Link href="#">Contact Us</Nav.Link>
          </Nav>

          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>

          <Button className="join-us ms-3" variant="primary">
            Join Us
          </Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

const AppNavbar = () => {
  return (
    <div>
      <AppNav />
    </div>
  );
};

export default AppNavbar;

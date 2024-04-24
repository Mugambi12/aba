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
import { MdOutlineSearch } from "react-icons/md";
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

            <NavDropdown
              className="dropdown"
              title="About Us"
              id="aboutUsDropdown"
              menuVariant="light"
              align="end"
              drop="down"
            >
              <NavDropdown.Item href="#" className="p-2 my-1">
                Our Story
              </NavDropdown.Item>
              <NavDropdown.Item href="#" className="p-2 my-1">
                Vision & Mission
              </NavDropdown.Item>
              <NavDropdown.Item href="#" className="p-2 my-1">
                Our History
              </NavDropdown.Item>
              <NavDropdown.Item href="#" className="p-2 my-1">
                Team
              </NavDropdown.Item>
              <NavDropdown.Item href="#" className="p-2 my-1">
                Testimonials
              </NavDropdown.Item>
            </NavDropdown>

            <NavDropdown
              className="dropdown"
              title="Programs"
              id="programsDropdown"
              menuVariant="light"
              align="end"
              drop="down"
            >
              <NavDropdown.Item href="#" className="p-2 my-1">
                Conservation Initiatives
              </NavDropdown.Item>
              <NavDropdown.Item href="#" className="p-2 my-1">
                Research Projects
              </NavDropdown.Item>
              <NavDropdown.Item href="#" className="p-2 my-1">
                Community Engagement
              </NavDropdown.Item>
              <NavDropdown.Item href="#" className="p-2 my-1">
                Education and Outreach
              </NavDropdown.Item>
              <NavDropdown.Item href="#" className="p-2 my-1">
                Future Programs
              </NavDropdown.Item>
              <NavDropdown.Item href="#" className="p-2 my-1">
                Completed Programs
              </NavDropdown.Item>
            </NavDropdown>

            <Nav.Link href="#">Thematic Areas</Nav.Link>

            <NavDropdown
              className="dropdown"
              title="Our Partners"
              id="ourPartnersDropdown"
              menuVariant="light"
              align="end"
              drop="down"
            >
              <Row className="d-flex justify-content-between">
                <Col md={6} lg={4}>
                  <h6 className="mb-2">Central Africa</h6>
                  <NavDropdown.Item href="#" className="py-2 my-1">
                    Rainforest Preservation Network
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#" className="py-2 my-1">
                    Wildlife Rescue Alliance
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#" className="py-2 my-1">
                    Central African Biodiversity Institute
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#" className="py-2 my-1">
                    Community Conservation Coalition
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#" className="py-2 my-1">
                    River Basin Protection Society
                  </NavDropdown.Item>
                </Col>

                {/* Eastern Africa column */}
                <Col md={6} lg={3}>
                  <h6>Eastern Africa</h6>
                  <NavDropdown.Item href="#" className="py-2 my-1">
                    Eastern Savannah Trust
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#" className="py-2 my-1">
                    Marine Conservation Foundation
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#" className="py-2 my-1">
                    Forest Guardians
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#" className="py-2 my-1">
                    Sustainable Agriculture Association
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#" className="py-2 my-1">
                    Highland Ecosystem Network
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#" className="py-2 my-1">
                    Wildlife Research Institute
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#" className="py-2 my-1">
                    Eastern Africa Conservation Council
                  </NavDropdown.Item>
                </Col>

                {/* Southern Africa column */}
                <Col md={6} lg={3}>
                  <h6>Southern Africa</h6>
                  <NavDropdown.Item href="#" className="py-2 my-1">
                    Southern Plains Wildlife Society
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#" className="py-2 my-1">
                    Wildlife Tracking Organization
                  </NavDropdown.Item>
                </Col>

                {/* Western Africa column */}
                <Col md={6} lg={3}>
                  <h6>Western Africa</h6>
                  <NavDropdown.Item href="#" className="py-2 my-1">
                    West African Nature Conservancy
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#" className="py-2 my-1">
                    Coastal Preservation Initiative
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#" className="py-2 my-1">
                    Savanna Protection Network
                  </NavDropdown.Item>
                </Col>

                {/* International column */}
                <Col md={6} lg={3}>
                  <h6>International</h6>
                  <NavDropdown.Item href="#" className="p-2 my-1">
                    Global Biodiversity Alliance
                  </NavDropdown.Item>
                </Col>
              </Row>
            </NavDropdown>

            <NavDropdown
              className="dropdown"
              title="Resources"
              id="resourcesDropdown"
            >
              <NavDropdown.Item href="#" className="p-2 my-1">
                News
              </NavDropdown.Item>
              <NavDropdown.Item href="#" className="p-2 my-1">
                Guides
              </NavDropdown.Item>
              <NavDropdown.Item href="#" className="p-2 my-1">
                Interviews
              </NavDropdown.Item>
              <NavDropdown.Item href="#" className="p-2 my-1">
                Publications
              </NavDropdown.Item>
              <NavDropdown.Item href="#" className="p-2 my-1">
                Books
              </NavDropdown.Item>
              <NavDropdown.Item href="#" className="p-2 my-1">
                Podcasts
              </NavDropdown.Item>
            </NavDropdown>

            <Nav.Link href="#">Contact Us</Nav.Link>
          </Nav>

          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2 form-control-sm"
              aria-label="Search"
            />
            <Button variant="outline-secondary" className="btn-sm">
              <MdOutlineSearch />
            </Button>
          </Form>

          <Button className="join-us ms-3 btn-sm" variant="outline-primary">
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

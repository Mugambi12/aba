import React from "react";
import {
  Button,
  Container,
  Form,
  Nav,
  Navbar,
  NavDropdown,
  Row,
  Col,
} from "react-bootstrap";
import { MdOutlineSearch } from "react-icons/md";
import logo from "../../assets/images/logo.svg";

function BrandName() {
  return (
    <Navbar.Brand href="#">
      <img src={logo} alt="Logo" className="navbar-logo" />
    </Navbar.Brand>
  );
}

function Home() {
  return <Nav.Link href="/">Home</Nav.Link>;
}

function AboutUs() {
  return (
    <NavDropdown
      title="About Us"
      id="aboutUsDropdown"
      menuVariant="dark"
      align="end"
    >
      <NavDropdown.Item href="/about#ourStory" className="py-2 px-3 my-1">
        Our Story
      </NavDropdown.Item>
      <NavDropdown.Item href="/about#visionMission" className="py-2 px-3 my-1">
        Vision & Mission
      </NavDropdown.Item>
      <NavDropdown.Item href="/about#ourHistory" className="py-2 px-3 my-1">
        Our History
      </NavDropdown.Item>
      <NavDropdown.Item href="/about#team" className="py-2 px-3 my-1">
        Team
      </NavDropdown.Item>
      <NavDropdown.Item href="/about#testimonials" className="py-2 px-3 my-1">
        Testimonials
      </NavDropdown.Item>
    </NavDropdown>
  );
}

function ThematicAreas() {
  return (
    <NavDropdown
      title="Thematic Areas"
      id="thematicAreasDropdown"
      menuVariant="light"
      align="end"
    >
      <NavDropdown.Item href="#" className="py-2 px-3 my-1">
        Biodiversity Conservation
      </NavDropdown.Item>
      <NavDropdown.Item href="#" className="py-2 px-3 my-1">
        Climate Change
      </NavDropdown.Item>
      <NavDropdown.Item href="#" className="py-2 px-3 my-1">
        Ecosystem Restoration
      </NavDropdown.Item>
      <NavDropdown.Item href="#" className="py-2 px-3 my-1">
        Sustainable Development
      </NavDropdown.Item>
      <NavDropdown.Item href="#" className="py-2 px-3 my-1">
        Wildlife Protection
      </NavDropdown.Item>
    </NavDropdown>
  );
}

function Programs() {
  return (
    <NavDropdown
      title="Programs"
      id="programsDropdown"
      menuVariant="light"
      align="end"
    >
      <NavDropdown.Item href="#" className="py-2 px-3 my-1">
        In Progress Programs
      </NavDropdown.Item>
      <NavDropdown.Item href="#" className="py-2 px-3 my-1">
        Future Programs
      </NavDropdown.Item>
      <NavDropdown.Item href="#" className="py-2 px-3 my-1">
        Completed Programs
      </NavDropdown.Item>
    </NavDropdown>
  );
}

function OurPartners() {
  return (
    <NavDropdown
      title="Our Partners"
      id="ourPartnersDropdown"
      menuVariant="light"
      align="end"
    >
      <Row>
        {/* Central Africa column */}
        <Col md={6} lg={4}>
          <h6 className="mb-2">Central Africa</h6>
          <NavDropdown.Item href="#" className="py-2 px-3 my-1">
            Rainforest Preservation Network
          </NavDropdown.Item>
          <NavDropdown.Item href="#" className="py-2 px-3 my-1">
            Wildlife Rescue Alliance
          </NavDropdown.Item>
          <NavDropdown.Item href="#" className="py-2 px-3 my-1">
            Central African Biodiversity Institute
          </NavDropdown.Item>
          <NavDropdown.Item href="#" className="py-2 px-3 my-1">
            Community Conservation Coalition
          </NavDropdown.Item>
          <NavDropdown.Item href="#" className="py-2 px-3 my-1">
            River Basin Protection Society
          </NavDropdown.Item>
        </Col>

        {/* Eastern Africa column */}
        <Col md={6} lg={3}>
          <h6>Eastern Africa</h6>
          <NavDropdown.Item href="#" className="py-2 px-3 my-1">
            Eastern Savannah Trust
          </NavDropdown.Item>
          <NavDropdown.Item href="#" className="py-2 px-3 my-1">
            Marine Conservation Foundation
          </NavDropdown.Item>
          <NavDropdown.Item href="#" className="py-2 px-3 my-1">
            Forest Guardians
          </NavDropdown.Item>
          <NavDropdown.Item href="#" className="py-2 px-3 my-1">
            Sustainable Agriculture Association
          </NavDropdown.Item>
          <NavDropdown.Item href="#" className="py-2 px-3 my-1">
            Highland Ecosystem Network
          </NavDropdown.Item>
          <NavDropdown.Item href="#" className="py-2 px-3 my-1">
            Wildlife Research Institute
          </NavDropdown.Item>
          <NavDropdown.Item href="#" className="py-2 px-3 my-1">
            Eastern Africa Conservation Council
          </NavDropdown.Item>
        </Col>

        {/* Southern Africa column */}
        <Col md={6} lg={3}>
          <h6>Southern Africa</h6>
          <NavDropdown.Item href="#" className="py-2 px-3 my-1">
            Southern Plains Wildlife Society
          </NavDropdown.Item>
          <NavDropdown.Item href="#" className="py-2 px-3 my-1">
            Wildlife Tracking Organization
          </NavDropdown.Item>
        </Col>

        {/* Western Africa column */}
        <Col md={6} lg={3}>
          <h6>Western Africa</h6>
          <NavDropdown.Item href="#" className="py-2 px-3 my-1">
            West African Nature Conservancy
          </NavDropdown.Item>
          <NavDropdown.Item href="#" className="py-2 px-3 my-1">
            Coastal Preservation Initiative
          </NavDropdown.Item>
          <NavDropdown.Item href="#" className="py-2 px-3 my-1">
            Savanna Protection Network
          </NavDropdown.Item>
        </Col>

        {/* International column */}
        <Col md={6} lg={3}>
          <h6>International</h6>
          <NavDropdown.Item href="#" className="py-2 px-3 my-1">
            Global Biodiversity Alliance
          </NavDropdown.Item>
        </Col>
      </Row>
    </NavDropdown>
  );
}

function MediaAndResources() {
  return (
    <NavDropdown
      title="Media & Resources"
      id="MediaDropdown"
      menuVariant="light"
      align="end"
    >
      <NavDropdown.Item href="#" className="py-2 px-3 my-1">
        News
      </NavDropdown.Item>
      <NavDropdown.Item href="#" className="py-2 px-3 my-1">
        Guides
      </NavDropdown.Item>
      <NavDropdown.Item href="#" className="py-2 px-3 my-1">
        Interviews
      </NavDropdown.Item>
      <NavDropdown.Item href="#" className="py-2 px-3 my-1">
        Publications
      </NavDropdown.Item>
      <NavDropdown.Item href="#" className="py-2 px-3 my-1">
        Books
      </NavDropdown.Item>
      <NavDropdown.Item href="#" className="py-2 px-3 my-1">
        Podcasts
      </NavDropdown.Item>
    </NavDropdown>
  );
}

function ContactUs() {
  return (
    <Nav.Link href="/contact" className="ms-3">
      Contact Us
    </Nav.Link>
  );
}

function SearchForm() {
  return (
    <Form className="d-flex ms-3">
      <Form.Control
        type="search"
        placeholder="Search"
        className="me-2"
        aria-label="Search"
      />
      <Button variant="outline-primary">
        <MdOutlineSearch />
      </Button>
    </Form>
  );
}

function JoinUs() {
  return (
    <Button variant="primary" className="ms-3">
      Join Us
    </Button>
  );
}

const AppNavbar = () => {
  return (
    <Navbar
      sticky="top"
      expand="lg"
      bg="light"
      variant="light"
      className="sticky-top px-3"
    >
      <Container fluid>
        <BrandName />
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto my-2 my-lg-0" navbarScroll>
            <Home />
            <AboutUs />
            <Programs />
            <ThematicAreas />
            <OurPartners />
            <MediaAndResources />
            <ContactUs />
          </Nav>

          <SearchForm />
          <JoinUs />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default AppNavbar;

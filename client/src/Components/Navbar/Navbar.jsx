import React, { useState } from "react";
import {
  Button,
  Col,
  Container,
  Form,
  Modal,
  Nav,
  Navbar,
  NavDropdown,
  Row,
} from "react-bootstrap";
import { MdOutlineSearch } from "react-icons/md";
import logo from "../../assets/images/logo.svg";
import SearchEngine from "../SearchEngine/Search";

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
      <Row className="w-100">
        {" "}
        {/* Add w-100 class for full width */}
        {/* Central Africa column */}
        <Col md={6} lg={4}>
          <h6>Central Africa</h6>
          <NavDropdown.Item href="#">
            Rainforest Preservation Network
          </NavDropdown.Item>
          <NavDropdown.Item href="#">Wildlife Rescue Alliance</NavDropdown.Item>
          <NavDropdown.Item href="#">
            Central African Biodiversity Institute
          </NavDropdown.Item>
          <NavDropdown.Item href="#">
            Community Conservation Coalition
          </NavDropdown.Item>
          <NavDropdown.Item href="#">
            River Basin Protection Society
          </NavDropdown.Item>
        </Col>
        {/* Eastern Africa column */}
        <Col md={6} lg={4}>
          <h6>Eastern Africa</h6>
          <NavDropdown.Item href="#">Eastern Savannah Trust</NavDropdown.Item>
          <NavDropdown.Item href="#">
            Marine Conservation Foundation
          </NavDropdown.Item>
          <NavDropdown.Item href="#">Forest Guardians</NavDropdown.Item>
          <NavDropdown.Item href="#">
            Sustainable Agriculture Association
          </NavDropdown.Item>
          <NavDropdown.Item href="#">
            Highland Ecosystem Network
          </NavDropdown.Item>
          <NavDropdown.Item href="#">
            Wildlife Research Institute
          </NavDropdown.Item>
          <NavDropdown.Item href="#">
            Eastern Africa Conservation Council
          </NavDropdown.Item>
        </Col>
        {/* Southern Africa column */}
        <Col md={6} lg={4}>
          <h6>Southern Africa</h6>
          <NavDropdown.Item href="#">
            Southern Plains Wildlife Society
          </NavDropdown.Item>
          <NavDropdown.Item href="#">
            Wildlife Tracking Organization
          </NavDropdown.Item>
        </Col>
        {/* Western Africa column */}
        <Col md={6} lg={4}>
          <h6>Western Africa</h6>
          <NavDropdown.Item href="#">
            West African Nature Conservancy
          </NavDropdown.Item>
          <NavDropdown.Item href="#">
            Coastal Preservation Initiative
          </NavDropdown.Item>
          <NavDropdown.Item href="#">
            Savanna Protection Network
          </NavDropdown.Item>
        </Col>
        {/* International column */}
        <Col md={6} lg={4}>
          <h6>International</h6>
          <NavDropdown.Item href="#">
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
  const [showModal, setShowModal] = useState(false);
  const handleModalShow = () => setShowModal(true);
  const handleModalClose = () => setShowModal(false);

  return (
    <>
      <Button
        className="border-0"
        variant="light"
        color="light"
        onClick={handleModalShow}
      >
        <MdOutlineSearch />
      </Button>

      <Modal
        show={showModal}
        onHide={handleModalClose}
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Search</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <SearchEngine />
        </Modal.Body>
      </Modal>
    </>
  );
}

function JoinUs() {
  return (
    <Button variant="outline-primary" className="ms-3">
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

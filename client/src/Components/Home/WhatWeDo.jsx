import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import img from "../../assets/images/landing-page.jpg";

function WhatWeDo() {
  return (
    <Container fluid>
      <div className="py-2 mb-2 text-success fs-2 border-bottom border-2 border-success border-radius-2 border-opacity-50">
        What We Do
      </div>

      <Row>
        <Col md={4} className="border-end">
          <div className="position-relative">
            <div className="position-absolute top-50 start-50 translate-middle">
              <div className=" text-primary fs-4">
                Biodiversity Conservation
              </div>
              <p className="mt-3">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Perspiciatis rerum atque consequuntur esse odio alias dolor
                magnam ex!
              </p>
            </div>
            <img
              src={img}
              alt="sustainable-development"
              className="img-fluid"
            />
          </div>
        </Col>

        <Col md={4}>
          <div className="position-relative">
            <div className="position-absolute top-50 start-50 translate-middle">
              <div className=" text-primary fs-4">Climate Change</div>
              <p className="mt-3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
                corporis asperiores eos nulla repudiandae? Recusandae!
              </p>
            </div>
            <img
              src={img}
              alt="sustainable-development"
              className="img-fluid"
            />
          </div>
        </Col>

        <Col md={4} className="border-end">
          <div className="position-relative">
            <div className="position-absolute top-50 start-50 translate-middle">
              <div className=" text-primary fs-4">Ecosystem Restoration</div>
              <p className="mt-3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
                corporis asperiores eos nulla repudiandae? Recusandae!
              </p>
            </div>
            <img
              src={img}
              alt="sustainable-development"
              className="img-fluid"
            />
          </div>
        </Col>

        <Col md={4}>
          <div className="position-relative">
            <div className="position-absolute top-50 start-50 translate-middle">
              <div className=" text-primary fs-4">Sustainable Development</div>
              <p className="mt-3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Et
                accusamus voluptatem cumque ullam, illo voluptas nisi ex ad
                minima sequi.
              </p>
            </div>
            <img
              src={img}
              alt="sustainable-development"
              className="img-fluid"
            />
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default WhatWeDo;

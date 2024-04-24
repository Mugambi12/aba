import React, { useEffect, useState } from "react";
import { Container, Form, Row, Col, Button } from "react-bootstrap";

function SearchEngine() {
  const [search, setSearch] = useState("");

  useEffect(() => {
    document.title = "Search - ABA";
  }, []);

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    performSearch(search);
  };

  // Function to perform the search
  const performSearch = (query) => {
    // Add your search logic here, e.g., make an API call or filter data
    console.log("Performing search for query:", query);
  };

  return (
    <Container fluid>
      <h1>Search</h1>
      <Form onSubmit={handleSubmit}>
        <Row>
          <Col md={6} lg={10}>
            <Form.Group controlId="formBasicSearch">
              <Row>
                <Col md={6} lg={2}>
                  <Form.Label>Search</Form.Label>
                </Col>
                <Col md={6} lg={10}>
                  <Form.Control
                    type="text"
                    placeholder="Search"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    aria-label="Search input"
                  />
                </Col>
              </Row>
            </Form.Group>
          </Col>
          <Col md={6} lg={2}>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Col>
        </Row>
      </Form>
    </Container>
  );
}

export default SearchEngine;

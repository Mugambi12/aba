import React, { useEffect, useState } from "react";
import { Container, Form, Row, Col, Button, Spinner } from "react-bootstrap";
import Data from "./data/content";

function SearchEngine() {
  const [search, setSearch] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const routes = [
    { route: "/", content: "Home page content goes here" },
    { route: "/about", content: "About page content goes here" },
    { route: "/contact", content: Data },
  ];

  useEffect(() => {
    document.title = "Search - ABA";
    setIsLoading(false);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    performSearch(search);
  };

  const performSearch = (query) => {
    const results = routes.filter(
      (route) =>
        route.content.toLowerCase().includes(query.toLowerCase()) ||
        route.route.toLowerCase().includes(query.toLowerCase())
    );

    setSearchResults(results);
    console.log("Search results:", results);
  };

  if (isLoading) {
    return (
      <div className="d-flex justify-content-center align-items-center vh-100">
        <Spinner animation="border" variant="info" />{" "}
        <span className="ms-3"> Loading...</span>
      </div>
    );
  }

  return (
    <Container fluid>
      <Form onSubmit={handleSubmit}>
        <Row>
          <Col md={6} lg={10}>
            <Form.Group controlId="formBasicSearch">
              <Form.Control
                type="text"
                placeholder="Search"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                aria-label="Search input"
              />
            </Form.Group>
          </Col>
          <Col md={6} lg={2}>
            <Button variant="outline-primary" type="submit">
              Search
            </Button>
          </Col>
        </Row>
      </Form>

      <div className="mt-5">
        <h5>Search Results:</h5>
        {searchResults.length > 0 ? (
          <ul>
            {searchResults.map((result, index) => (
              <li key={index}>
                <strong>Route:</strong> {result.route} -{" "}
                <strong>Content:</strong> {result.content}
              </li>
            ))}
          </ul>
        ) : (
          <p>No results found.</p>
        )}
      </div>
    </Container>
  );
}

export default SearchEngine;

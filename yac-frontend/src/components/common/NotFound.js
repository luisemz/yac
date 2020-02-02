import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const NotFound = () => {
  const style = {
    marginTop: "50%"
  };

  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col md="auto">
          <h3 style={style}>Oops! Page not found.</h3>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <Link to="/">
            <h3>Go to home!</h3>
          </Link>
        </Col>
      </Row>
    </Container>
  );
};

export default NotFound;

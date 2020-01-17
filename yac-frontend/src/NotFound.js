import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const NotFound = () => {
  const style = {
    marginTop: "50%"
  };

  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col md="auto">
          <h3 style={style}>Oops! Page not found.</h3>
        </Col>
      </Row>
    </Container>
  );
};

export default NotFound;

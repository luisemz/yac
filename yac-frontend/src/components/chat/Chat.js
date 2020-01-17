import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";

class Chat extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Col md="auto"></Col>
          <Col md={4}></Col>
        </Row>
      </Container>
    );
  }
}

export default Chat;

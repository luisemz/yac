import React, { Component } from "react";
import {
  Row,
  Col,
  InputGroup,
  FormControl,
  Button,
  Form
} from "react-bootstrap";

class MessageInput extends Component {
  style = {
    marginTop: "10px",
    marginBottom: "20px"
  };

  state = {
    message: ""
  };

  handleChange = e => {
    this.setState({
      ...this.state,
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.setState({ message: "" });
    e.target.elements[0].value = "";
  };

  render() {
    return (
      <Row>
        <Col>
          <div style={this.style}>
            <Form onSubmit={this.handleSubmit}>
              <InputGroup className="mb-3">
                <FormControl
                  placeholder="Type message"
                  aria-label="Type message"
                  aria-describedby="basic-addon2"
                  name="message"
                  onChange={this.handleChange}
                />
                <InputGroup.Append>
                  <Button variant="dark" type="submit">
                    Send
                  </Button>
                </InputGroup.Append>
              </InputGroup>
            </Form>
          </div>
        </Col>
      </Row>
    );
  }
}

export default MessageInput;

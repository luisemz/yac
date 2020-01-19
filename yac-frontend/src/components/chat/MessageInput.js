import React, { Component } from "react";
import { connect } from "react-redux";
import {
  Row,
  Col,
  InputGroup,
  FormControl,
  Button,
  Form
} from "react-bootstrap";

import * as messagesApi from "../../api/apiMessages";

import SocketContext from "../../socketContext";

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
    e.target.elements[0].value = "";
    messagesApi
      .newMessage({ user: this.props.user.username, text: this.state.message })
      .then(res => {
        this.props.socket.emit("NEW_MESSAGE", res.message);
        this.setState({ message: "" });
      })
      .catch(err => {
        throw err;
      });
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

function mapStateToProps({ user }) {
  return { user: user };
}

const MessageInputWithSocket = props => (
  <SocketContext.Consumer>
    {socket => <MessageInput {...props} socket={socket}></MessageInput>}
  </SocketContext.Consumer>
);

export default connect(mapStateToProps)(MessageInputWithSocket);

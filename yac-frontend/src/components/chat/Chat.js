import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";

import UserList from "./UserList";
import MessageDisplay from "./MessageDisplay";
import MessageInput from "./MessageInput";

import SocketContext from "../../socketContext";

class Chat extends Component {
  style = {
    marginTop: "20%",
    padding: "10px",
    borderRadius: "10px",
    boxShadow: "0px 14px 80px rgba(34, 35, 58, 0.2)"
  };

  state = {};

  componentDidMount() {
    this.props.socket.on("USER-AUTH", message => {
      this.setState({ ...this.state, message: message });
    });
  }

  render() {
    return (
      <>
        <Container>
          <Row className="justify-content-md-center">
            <Col md={8}>
              <Row style={this.style}>
                <Col md={8}>
                  <MessageDisplay messages={["Holaaaa"]}></MessageDisplay>
                  <MessageInput></MessageInput>
                </Col>
                <Col md={4}>
                  <UserList userList={["luismz16"]}></UserList>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}

const ChatWithSocket = props => (
  <SocketContext.Consumer>
    {socket => <Chat {...props} socket={socket}></Chat>}
  </SocketContext.Consumer>
);

export default ChatWithSocket;

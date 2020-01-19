import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Container, Row, Col } from "react-bootstrap";

import UserList from "./UserList";
import MessageDisplay from "./MessageDisplay";
import MessageInput from "./MessageInput";

import * as usersActions from "../../redux/actions/usersActions";

import SocketContext from "../../socketContext";

class Chat extends Component {
  style = {
    marginTop: "20%",
    padding: "10px",
    borderRadius: "10px",
    boxShadow: "0px 14px 80px rgba(34, 35, 58, 0.2)"
  };

  componentDidMount() {
    if (this.props.users.length < 1) {
      this.props.actions.loadUsers().catch(err => {
        throw err;
      });
    }
    this.props.socket.on("USER-AUTH", m => {
      this.props.actions.loadUsers().catch(err => {
        throw err;
      });
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
                  <UserList
                    myUser={this.props.user}
                    userList={this.props.users}
                  ></UserList>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}

Chat.propTypes = {
  actions: PropTypes.object.isRequired
};

function mapStateToProps({ user, users }) {
  return { user: user, users: users };
}

function mapDispatchToProps(dispatch) {
  return { actions: bindActionCreators(usersActions, dispatch) };
}

const ChatWithSocket = props => (
  <SocketContext.Consumer>
    {socket => <Chat {...props} socket={socket}></Chat>}
  </SocketContext.Consumer>
);

export default connect(mapStateToProps, mapDispatchToProps)(ChatWithSocket);

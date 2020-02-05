import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Container, Row, Col } from "react-bootstrap";

import UserList from "./UserList";
import MessageDisplay from "./MessageDisplay";
import MessageInput from "./MessageInput";

import * as usersActions from "../../redux/actions/usersActions";
import * as messagesActions from "../../redux/actions/messagesActions";

class Chat extends Component {
  style = {
    marginTop: "20%",
    padding: "10px",
    borderRadius: "10px",
    boxShadow: "0px 14px 80px rgba(34, 35, 58, 0.2)"
  };

  componentDidMount() {
    this.props.actions.users.loadUsers();
    this.props.actions.messages.loadMessages();
  }

  render() {
    return (
      <>
        <Container>
          <Row className="justify-content-md-center">
            <Col md={8}>
              <Row style={this.style}>
                <Col md={8}>
                  <MessageDisplay
                    messages={this.props.messages}
                    loading={this.props.loading}
                  ></MessageDisplay>
                  <MessageInput socket={this.props.socket}></MessageInput>
                </Col>
                <Col md={4}>
                  <UserList
                    myUser={this.props.user}
                    userList={this.props.users}
                    loading={this.props.loading}
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

const mapStateToProps = ({ user, users, messages, apiStatus }) => {
  return {
    user: user,
    users: users,
    messages: messages,
    loading: apiStatus > 0
  };
};

const mapDispatchToProps = dispatch => {
  return {
    actions: {
      users: bindActionCreators(usersActions, dispatch),
      messages: bindActionCreators(messagesActions, dispatch)
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Chat);

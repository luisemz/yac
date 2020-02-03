import React, { Component } from "react";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import {
  Row,
  Col,
  InputGroup,
  FormControl,
  Button,
  Form
} from "react-bootstrap";

import * as messagesActions from "../../redux/actions/messagesActions";

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
    this.props.actions
      .newMessage(
        { user: this.props.user.username, text: this.state.message },
        this.props.socket
      )
      .then(() => {
        this.setState({ message: "" });
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

MessageInput.propTypes = {
  actions: PropTypes.object.isRequired
};

const mapStateToProps = ({ user }) => {
  return { user: user };
};

const mapDispatchToProps = dispatch => {
  return { actions: bindActionCreators(messagesActions, dispatch) };
};

export default connect(mapStateToProps, mapDispatchToProps)(MessageInput);

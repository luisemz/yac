import React, { Component } from "react";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

import * as authActions from "../../redux/actions/authActions";

class Login extends Component {
  style = {
    marginTop: "50%",
    background: "#fff",
    boxShadow: "0px 14px 80px rgba(34, 35, 58, 0.2)",
    padding: "20px",
    borderRadius: "10px",
    transition: "all 0.3s"
  };

  state = {
    form: { username: "" },
    userFail: { state: false, message: "" }
  };

  handleChange = e => {
    this.setState({
      ...this.state,
      form: { ...this.state.form, [e.target.name]: e.target.value }
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.setState({
      ...this.state,
      userFail: {
        ...this.state.userFail,
        state: true,
        message: "User already connect"
      }
    });
    this.props.actions.loginUser(this.state.form);
  };

  render() {
    return (
      <Container>
        <Row>
          <Col md={{ span: 4, offset: 4 }}>
            <div style={this.style}>
              <Form onSubmit={this.handleSubmit}>
                <h3>AC Connect</h3>
                <Form.Group controlId="formBasicLogin">
                  <Form.Label>Username :</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Username"
                    name="username"
                    onChange={this.handleChange}
                  ></Form.Control>
                </Form.Group>
                <Button variant="dark" type="submit" className="btn-block">
                  Connect
                </Button>
                {this.state.userFail.state && (
                  <>
                    <br></br>
                    <Form.Text className="text-danger">
                      {this.state.userFail.message}.
                    </Form.Text>
                  </>
                )}
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
}

Login.propTypes = {
  actions: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return { user: state.user };
}

function mapDispatchToProps(dispatch) {
  return { actions: bindActionCreators(authActions, dispatch) };
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);

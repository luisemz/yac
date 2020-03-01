import React, { Component } from "react";
import PropTypes from "prop-types";
import { Redirect } from "react-router-dom";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { store } from "react-notifications-component";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

import * as authActions from "../../redux/actions/authActions";

export class Login extends Component {
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
    login: false,
    errors: {}
  };

  componentDidMount() {
    let user = localStorage.getItem("user") || null;
    if (user) this.props.actions.loginUserSuccess(JSON.parse(user));
  }

  handleChange = e => {
    this.setState({
      ...this.state,
      form: { ...this.state.form, [e.target.name]: e.target.value }
    });
  };

  formIsValid = () => {
    const { username } = this.state.form;
    const errors = {};

    if (!username) errors.username = "Username is required.";

    this.setState({ errors: errors });
    return Object.keys(errors).length === 0;
  };

  handleSubmit = e => {
    e.preventDefault();
    e.target.className += " was-validated";
    if (!this.formIsValid()) return;
    this.setState({ login: true });
    this.props.actions
      .loginUser(this.state.form, this.props.socket)
      .then(res => {
        if (res) {
          this.setState({ login: false });
          store.addNotification({
            message: res.message,
            type: "danger",
            insert: "top",
            container: "bottom-right",
            animationIn: ["animated", "fadeIn"],
            animationOut: ["animated", "fadeOut"],
            dismiss: {
              duration: 3000,
              onScreen: true,
              pauseOnHover: true
            }
          });
        }
      });
  };

  render() {
    if (this.props.user.username) return <Redirect to="/chat"></Redirect>;
    return (
      <Container>
        <Row>
          <Col md={{ span: 4, offset: 4 }}>
            <div style={this.style}>
              <Form
                onSubmit={this.handleSubmit}
                className="needs-validation"
                noValidate
              >
                <h3>AC Connect</h3>
                <Form.Group controlId="formBasicLogin">
                  <Form.Label>Username :</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Username"
                    name="username"
                    onChange={this.handleChange}
                    required
                  ></Form.Control>
                  <div className="invalid-feedback">
                    {this.state.errors.username}
                  </div>
                </Form.Group>
                <Button
                  variant="dark"
                  type="submit"
                  className="btn-block"
                  disabled={this.state.login}
                >
                  {this.state.login ? "Connecting..." : "Connect"}
                </Button>
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

const mapStateToProps = ({ user }) => {
  return { user: user };
};

const mapDispatchToProps = dispatch => {
  return { actions: bindActionCreators(authActions, dispatch) };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);

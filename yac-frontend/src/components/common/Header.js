import React, { Component } from "react";
import PropTypes from "prop-types";
import { Redirect } from "react-router-dom";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { Navbar, Nav } from "react-bootstrap";

import * as authActions from "../../redux/actions/authActions";

class Header extends Component {
  style = {
    boxShadow: "0px 14px 80px rgba(34, 35, 58, 0.2)"
  };

  handleClick = e => {
    e.preventDefault();
    this.props.actions.logoutUser(this.props.user, this.props.socket);
  };

  render() {
    return (
      <>
        {!this.props.user.username && window.location.pathname === "/chat" && (
          <Redirect to="/" />
        )}
        <Navbar
          bg="dark"
          variant="dark"
          expand="lg"
          fixed="top"
          style={this.style}
        >
          <Navbar.Brand href="/">Another Chat</Navbar.Brand>
          {this.props.user.username && (
            <>
              <Navbar.Toggle aria-controls="basic-navbar-nav"></Navbar.Toggle>
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                  <Navbar.Text className="text-muted">
                    Connected as: {this.props.user.username}
                  </Navbar.Text>
                  <Nav.Link onClick={this.handleClick}>Disconnect</Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </>
          )}
        </Navbar>
      </>
    );
  }
}

Header.propTypes = {
  actions: PropTypes.object.isRequired
};

const mapStateToProps = ({ user }) => {
  return { user: user };
};

const mapDispatchToProps = dispatch => {
  return { actions: bindActionCreators(authActions, dispatch) };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);

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

  state = {
    title: "Another Chat",
    user: {}
  };

  componentWillReceiveProps(nextProps) {
    if (this.state.user !== nextProps.user)
      this.setState({ ...this.state, user: nextProps.user });
  }

  handleClick = e => {
    e.preventDefault();
    this.props.actions.logoutUser({});
  };

  render() {
    return (
      <>
        {!this.props.user.username && <Redirect to="/" />}
        <Navbar bg="dark" variant="dark" style={this.style}>
          <Navbar.Brand href="/">{this.state.title}</Navbar.Brand>
          {this.state.user.username && (
            <>
              <Navbar.Toggle aria-controls="basic-navbar-nav"></Navbar.Toggle>
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                  <Navbar.Text>
                    Connect as: {this.state.user.username} |
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

function mapStateToProps({ user }) {
  return { user: user };
}

function mapDispatchToProps(dispatch) {
  return { actions: bindActionCreators(authActions, dispatch) };
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);

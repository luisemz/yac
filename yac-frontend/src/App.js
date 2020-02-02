import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from "./components/common/Header";
import Login from "./components/auth/Login";
import Chat from "./components/chat/Chat";
import NotFound from "./components/common/NotFound";

import * as usersActions from "./redux/actions/usersActions";
import * as messagesActions from "./redux/actions/messagesActions";

import { BASE_URL } from "./api/apiUtils";
import * as socketIOClient from "socket.io-client";

const socket = socketIOClient(BASE_URL);

class App extends Component {
  componentDidMount() {
    socket.on("USER-LOGIN", user => {
      this.props.actions.users.addUser(user);
    });

    socket.on("USER-LOGOUT", user => {
      this.props.actions.users.removeUser(user);
    });

    socket.on("ADD_MESSAGE", message => {
      this.props.actions.messages.addMessage(message);
    });
  }
  render() {
    return (
      <Router>
        <div className="App">
          <Header socket={socket}></Header>
          <Switch>
            <Route
              exact
              path="/"
              component={() => <Login socket={socket}></Login>}
            ></Route>
            <Route
              path="/chat"
              component={() => <Chat socket={socket}></Chat>}
            ></Route>
            <Route path="*" component={NotFound}></Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

App.propTypes = {
  actions: PropTypes.object.isRequired
};

const mapStateToProps = () => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return {
    actions: {
      users: bindActionCreators(usersActions, dispatch),
      messages: bindActionCreators(messagesActions, dispatch)
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);

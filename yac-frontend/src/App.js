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
import NotFound from "./NotFound";

import * as usersActions from "./redux/actions/usersActions";
import * as messagesActions from "./redux/actions/messagesActions";

import { BASE_URL } from "./api/apiUtils";
import * as socketIOClient from "socket.io-client";
import SocketContext from "./socketContext";

const socket = socketIOClient(BASE_URL);

class App extends Component {
  componentDidMount() {
    socket.on("USER-AUTH", m => {
      this.props.actions.users.loadUsers().catch(err => {
        throw err;
      });
    });

    socket.on("ADD_MESSAGE", message => {
      this.props.actions.messages.addMessage(message);
    });
  }
  render() {
    return (
      <SocketContext.Provider value={socket}>
        <Router>
          <div className="App">
            <Header></Header>
            <Switch>
              <Route exact path="/" component={Login}></Route>
              <Route path="/chat" component={Chat}></Route>
              <Route component={NotFound}></Route>
            </Switch>
          </div>
        </Router>
      </SocketContext.Provider>
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

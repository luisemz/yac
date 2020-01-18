import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from "./components/common/Header";
import Login from "./components/auth/Login";
import Chat from "./components/chat/Chat";
import NotFound from "./NotFound";

import { BASE_URL } from "./api/apiUtils";
import * as socketIOClient from "socket.io-client";
import SocketContext from "./socketContext";

const socket = socketIOClient(BASE_URL);

function App() {
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

export default App;

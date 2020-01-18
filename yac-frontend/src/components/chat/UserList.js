import React from "react";
import { Row, Col } from "react-bootstrap";

const style = {
    overflow: "auto",
    height: "300px",
    border: "solid 1px #ccc",
    borderRadius: "5px"
  },
  styleUserList = {
    margin: "5px",
    borderRadius: "5px"
  },
  styleUserMe = {
    margin: "5px",
    borderRadius: "5px",
    padding: "5px",
    backgroundColor: "#ccc"
  };

const myUser = { _id: "" };

const UserList = ({ userList }) => {
  return (
    <Row>
      <Col md={12}>
        <div className="text-muted">Users connected</div>
        <div className="text-right" style={style}>
          {userList.map((user, i) => (
            <div
              key={i}
              style={user._id === myUser._id ? styleUserMe : styleUserList}
            >
              {user}
              {user._id === myUser._id && " (Me)"}
            </div>
          ))}
        </div>
      </Col>
    </Row>
  );
};

export default UserList;

import React from "react";
import { Row, Col } from "react-bootstrap";

const style = {
    overflow: "auto",
    height: "300px",
    border: "solid 1px #ccc",
    borderRadius: "5px"
  },
  styleMessage = {
    margin: "5px",
    padding: "5px",
    borderRadius: "5px"
  };

const MessageDisplay = ({ messages }) => {
  return (
    <Row>
      <Col md={12}>
        <div className="text-left" style={style}>
          {messages.map((message, i) => {
            return (
              <div key={i} style={styleMessage}>
                {message}
              </div>
            );
          })}
        </div>
      </Col>
    </Row>
  );
};

export default MessageDisplay;

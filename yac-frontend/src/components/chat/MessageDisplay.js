import React, { useEffect, useRef } from "react";
import { Row, Col } from "react-bootstrap";

import MessageYoutubeBot from "./MessageYoutubeBot";

const MessageDisplay = ({ messages }) => {
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

  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current.scrollIntoView({ block: "end", behavior: "smooth" });
  });

  return (
    <Row>
      <Col md={12}>
        <div className="text-left" style={style}>
          {messages.map((message, i) => {
            return (
              <div key={i} style={styleMessage}>
                ({new Date(message.date).toLocaleString()}) - {message.user} :{" "}
                {message.text.toLowerCase().includes("youtube/") ? (
                  <MessageYoutubeBot
                    search={message.text.toLowerCase().split("youtube/")[1]}
                  ></MessageYoutubeBot>
                ) : (
                  <strong>{message.text}</strong>
                )}
              </div>
            );
          })}
          <div ref={messagesEndRef}></div>
        </div>
      </Col>
    </Row>
  );
};

export default MessageDisplay;

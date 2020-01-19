"use strict";

const Message = require("../../models/message");
const { internalServerError } = require("../../utils/error");

function getMessages(req, res) {
  Message.find({}, (err, messages) => {
    if (err) {
      internalServerError(res, "Error access to Messages");
    } else {
      res.status(200).send({
        messages: messages
      });
    }
  });
}

function postMessage(req, res) {
  let params = req.body;
  let user = params.user,
    text = params.text;

  let newMessage = Message();
  newMessage.date = new Date();
  newMessage.user = user;
  newMessage.text = text;

  newMessage.save((err, message) => {
    if (err) {
      internalServerError(res, "Error save Message");
    } else {
      res.status(200).send({
        message: message
      });
    }
  });
}

module.exports = { getMessages, postMessage };

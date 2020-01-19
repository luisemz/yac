"use strict";

const express = require("express");
const messagesController = require("./messages.controller");

const messagesRouter = express.Router();

messagesRouter.get("/messages", messagesController.getMessages);
messagesRouter.post("/message", messagesController.postMessage);

module.exports = messagesRouter;

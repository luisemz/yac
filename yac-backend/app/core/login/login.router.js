"use strict";

const express = require("express");
const loginController = require("./login.controller");

const loginRouter = express.Router();

loginRouter.post("/login", loginController.postUser);
loginRouter.delete("/logout", loginController.deleteUser);

module.exports = loginRouter;

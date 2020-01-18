"use strict";

const express = require("express");
const authController = require("./auth.controller");

const authRouter = express.Router();

authRouter.post("/login", authController.postUser);
authRouter.delete("/logout", authController.deleteUser);

module.exports = authRouter;

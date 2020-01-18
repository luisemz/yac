"use strict";

const express = require("express");
const usersController = require("./users.controller");

const usersRouter = express.Router();

usersRouter.delete("/users", usersController.getUsers);

module.exports = usersRouter;

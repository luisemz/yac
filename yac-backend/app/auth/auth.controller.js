"use strict";

const User = require("../models/user");
const { internalServerError, badRequest, notFound } = require("../utils/error");

function postUser(req, res) {
  let params = req.body;
  let username = params.username;

  User.findOne({ username: username }, (err, user) => {
    if (err) {
      internalServerError(res, "Error access to Users");
    } else if (user) {
      badRequest(res, "User already connect");
    } else {
      let newUser = User();
      newUser.username = username;

      newUser.save((err, user) => {
        if (err) {
          internalServerError(res, "Error connecting User");
        } else {
          res.status(200).send({
            user: user
          });
        }
      });
    }
  });
}

function deleteUser(req, res) {
  let params = req.body;
  let id = params._id;

  User.findById(id, (err, user) => {
    if (err) {
      internalServerError(res, "Error access to Users");
    } else if (user) {
      user.remove((err, user) => {
        if (err) {
          internalServerError(res, "Error disconnecting User");
        } else {
          res.status(200).send({
            user: user,
            message: "Disconnected"
          });
        }
      });
    } else {
      notFound(res, "User not found");
    }
  });
}

module.exports = { postUser, deleteUser };

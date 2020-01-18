"use strict";

const User = require("../../models/user");
const { internalServerError } = require("../../utils/error");

function getUsers(req, res) {
  User.find({}, (err, users) => {
    if (err) {
      internalServerError(res, "Error acces to Users");
    } else {
      res.status(200).send({
        users: users
      });
    }
  });
}

module.exports = { getUsers };

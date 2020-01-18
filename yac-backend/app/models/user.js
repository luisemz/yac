"use strict";

var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var UserSchema = Schema({
  username: { type: String, required: true, uniqued: true }
});

module.exports = mongoose.model("User", UserSchema);

"use strict";

var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var MessageSchema = Schema({
  date: { type: Date, required: true },
  user: { type: String, required: true },
  text: { type: String, required: true }
});

module.exports = mongoose.model("Message", MessageSchema);

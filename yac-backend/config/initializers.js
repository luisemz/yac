"use strict";

const dotenv = require("dotenv");

dotenv.config();

module.exports = {
  PORT: process.env.PORT,
  PORT_WS: process.env.PORT_WS,
  DB_HOST: process.env.DB_HOST,
  DB_PORT: process.env.DB_PORT,
  DB_NAME: process.env.DB_NAME,
  DB_USER: process.env.DB_USER,
  DB_PASS: process.env.DB_PASS
};

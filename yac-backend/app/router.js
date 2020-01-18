"use strict";

const API_BASE = "/api/v1";

module.exports = function(server) {
  const loginRouter = require("./core/login/login.router");
  server.use(`${API_BASE}/auth`, loginRouter);
};

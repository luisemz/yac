"use strict";

const API_BASE = "/api/v1";

module.exports = function(server) {
  const authRouter = require("./auth/auth.router");
  server.use(`${API_BASE}/auth`, authRouter);

  const usersRouter = require("./core/users/users.router");
  server.use(`${API_BASE}`, usersRouter);
};

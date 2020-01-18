"use strict";

function badRequest(res, message) {
  return res.status(400).send({
    error: "bad request",
    message: message,
    status: 400
  });
}

function unauthorized(res, message) {
  return res.status(401).send({
    error: "unauthorized",
    message: message,
    status: 401
  });
}

function notFound(res, message) {
  return res.status(404).send({
    error: "not found",
    message: message,
    status: 404
  });
}

function internalServerError(res, message) {
  return res.status(500).send({
    error: "internal servel error",
    message: message,
    status: 500
  });
}

function handleFatalError(err) {
  console.error(err.message);
  throw err;
}

process.on("uncaughtException", handleFatalError);
process.on("unhandledRejection", handleFatalError);

module.exports = {
  badRequest,
  unauthorized,
  notFound,
  internalServerError
};

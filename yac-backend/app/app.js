"use strict";

const bodyParser = require("body-parser"),
  express = require("express"),
  cors = require("cors"),
  http = require("http");

const app = express(),
  server = http.createServer(app),
  io = require("socket.io")(server);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(
  cors({
    origin: "*",
    methods: "GET, POST, PUT, DELETE, OPTIONS,",
    allowedHeader: "Content-Type,Authorization",
    preflightContinue: false,
    optionsSuccessStatus: 200
  })
);

io.on("connection", socket => {
  console.log(`Socket connected: ${socket.id}`);
  require("./socket")(socket);
});

require("./router")(app);

module.exports = { server };

"use strict";

const mongoose = require("mongoose"),
  { PORT, DB_HOST, DB_PORT, DB_NAME } = require("./config/initializers"),
  { server } = require("./app/app");

mongoose
  .connect("mongodb://" + DB_HOST + ":" + DB_PORT + "/" + DB_NAME, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log(`Database connected: ${DB_NAME}`);
  })
  .catch(err => {
    console.error(`Databases connection error: ${err}`);
    process.exit(1);
  });

server.listen(PORT, () => {
  console.log(`Server runned on: ${PORT}`);
});

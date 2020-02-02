"use strict";

module.exports = function(io, socket) {
  socket.on("LOGIN", user => {
    console.log(`User connected: ${user.username} - Id: ${user._id}`);
    socket.broadcast.emit("USER-LOGIN", user);
  });

  socket.on("LOGOUT", user => {
    console.log(`User disconnected: ${user.username} - Id: ${user._id}`);
    socket.broadcast.emit("USER-LOGOUT", user);
  });

  socket.on("NEW_MESSAGE", message => {
    io.emit("ADD_MESSAGE", message);
  });

  socket.on("disconnect", () => {
    console.log(`Socket disconnected: ${socket.id}`);
  });
};

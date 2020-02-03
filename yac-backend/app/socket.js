"use strict";

module.exports = function(socket) {
  socket.on("LOGIN", user => {
    console.log(`User connected: ${user.username} - Id: ${user._id}`);
    socket.broadcast.emit("USER-LOGIN", user);
  });

  socket.on("LOGOUT", user => {
    console.log(`User disconnected: ${user.username} - Id: ${user._id}`);
    socket.broadcast.emit("USER-LOGOUT", user);
  });

  socket.on("NEW_MESSAGE", message => {
    socket.broadcast.emit("ADD_MESSAGE", message);
  });

  socket.on("disconnect", () => {
    console.log(`Socket disconnected: ${socket.id}`);
  });
};

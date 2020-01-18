"use strict";

module.exports = function(socket) {
  socket.on("LOGIN", user => {
    console.log(`User connected: ${user.username} - Id: ${user._id}`);
    socket.broadcast.emit("USER-AUTH", `User ${user.username} connected`);
  });

  socket.on("LOGOUT", user => {
    console.log(`User disconnected: ${user.username} - Id: ${user._id}`);
    socket.broadcast.emit("USER-AUTH", `User ${user.username} disconnected`);
  });

  socket.on("disconnect", () => {
    console.log(`Socket disconnected: ${socket.id}`);
  });
};

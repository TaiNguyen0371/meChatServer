const MessageModel = require("../models/message.model");
class SocketService {
  connection(socket) {
    console.log(`User connected with id: ${socket.id}`);
    // Something will do here when connect socket.io
    socket.on("disconnect", () => {
      console.log(`User disconnected with id: ${socket.id}`);
    });
    socket.on("message", ({ room, content, sender }) => {
      MessageModel.create({ room, content, sender })
        .then(async (messages) => {
          await MessageModel.find({ room: room })
            .then((messages) => {
              socket.emit("message", messages);
            })
            .catch((err) => {
              console.log(err);
            });
        })
        .catch((err) => {
          console.log(err);
        });
    });
    socket.on("room", async (roomId) => {
      console.log(roomId);
      await MessageModel.find({ room: roomId })
        .then((messages) => {
          console.log(messages);
          socket.emit("message", messages);
        })
        .catch((err) => {
          console.log(err);
        });
    });
  }
}
module.exports = new SocketService();

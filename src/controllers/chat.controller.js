const chatModel = require("../models/chat.model");

// class ChatMessage {
//   constructor(sender, recipient, message) {
//     this.sender = sender;
//     this.recipient = recipient;
//     this.message = message;
//     //   this.room = message
//   }
// }
class ChatController {
  getChatList(req, res) {
    const idUser = req.params.idUser;
    console.log(idUser);
    chatModel
      .find({ sender: idUser })
      .then((chatList) => {
        res.status(200).json({ result: chatList, message: "Found" });
      })
      .catch((err) => {
        res
          .status(503)
          .json({ message: "Not found any chat room match with user" });
      });
  }
}
module.exports = new ChatController();

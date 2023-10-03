const mongoose = require("mongoose");
const Chat = new mongoose.Schema(
  {
    _id: { type: mongoose.Schema.Types.ObjectId, required: true, auto: true },
    sender: { type: String },
    recipient: { type: String },
    room: { type: String },
  },
  { versionKey: false }
);

module.exports = mongoose.model("Chat", Chat, "chats");

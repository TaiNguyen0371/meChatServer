const mongoose = require("mongoose");
const Message = new mongoose.Schema(
  {
    _id: { type: mongoose.Schema.Types.ObjectId, required: true, auto: true },
    room: { type: String, require: true },
    sender: { type: String, require: true },
    content: { type: String, require: true },
    create_at: { type: Date, default: Date.now },
  },
  { versionKey: false }
);

module.exports = mongoose.model("messages", Message, "messages");

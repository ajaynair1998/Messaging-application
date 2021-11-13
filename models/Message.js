const mongoose = require("mongoose");
const { userSchema } = require("./User");

const messageSchema = new mongoose.Schema({
  room: room,
  from: { type: userSchema },
  to: { type: userSchema },
  message_body: String,
  forwarded: { state: Boolean, originalMessage: message },
  created_at: { type: Date, default: Date.now },
});

const Message = mongoose.model("message", messageSchemas);

module.exports = Message;

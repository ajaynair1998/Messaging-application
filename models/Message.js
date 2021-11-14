const mongoose = require("mongoose");
const { User } = require("./User");

const messageSchema = new mongoose.Schema({
  from: { type: mongoose.SchemaTypes.ObjectId, ref: "user" },
  to: { type: mongoose.SchemaTypes.ObjectId, ref: "user" },
  message_body: String,
  forwarded: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: "message",
    default: null,
  },
  created_at: { type: Date, default: Date.now },
});

const Message = mongoose.model("message", messageSchema);

module.exports = Message;

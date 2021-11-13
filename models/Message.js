const mongoose = require("mongoose");
const { userSchema } = require("./User");

const messageSchema = new mongoose.Schema({
  from: { type: mongoose.SchemaTypes.ObjectId, ref: "users" },
  to: { type: mongoose.SchemaTypes.ObjectId, ref: "users" },
  message_body: String,
  forwarded: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: "messages",
    default: false,
  },
  created_at: { type: Date, default: Date.now },
});

const Message = mongoose.model("message", messageSchemas);

module.exports = Message;

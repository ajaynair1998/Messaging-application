const mongoose = require("mongoose");
const { User } = require("../../models/User");
const { Message } = require("../../models/Message");

class ConnectionToDatabase {
  constructor() {
    const uri =
      "mongodb+srv://chatAppAdmin:testUser@cluster0.tc816.mongodb.net/chat-app?retryWrites=true&w=majority";
    this.connectionSuccessfull = mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
  }

  async addMessage(from, to, message_body, forwarded = false) {
    try {
      await this.connectionSuccessfull;
      const newMessage = new Message({
        from: from,
        to: to,
        message_body: message_body,
        forwarded: forwarded,
      });
      await newMessage.save();
    } catch (err) {
      console.log(err.message);
    }
  }

  async addUser(username, password, email) {
    try {
      await this.connectionSuccessfull;
      const newUser = new User({
        username: username,
        password: password,
        email: email,
      });
      let success = await newUser.save();
      return success;
    } catch (err) {
      console.log(err.message);
    }
  }

  async findUser(username, password) {
    try {
      await this.connectionSuccessfull;
      const userFound = await User.find({
        username: username,
        password: password,
      }).exec();
      return userFound.length > 0 ? userFound[0] : false;
    } catch (err) {
      console.log(err.message);
    }
  }
}

module.exports = ConnectionToDatabase;

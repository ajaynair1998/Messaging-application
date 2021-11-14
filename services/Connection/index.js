const mongoose = require("mongoose");
const { User } = require("../../models/User");
const Message = require("../../models/Message");

class ConnectionToDatabase {
  constructor() {
    const uri =
      "mongodb+srv://chatAppAdmin:testUser@cluster0.tc816.mongodb.net/chat-app?retryWrites=true&w=majority";
    this.connectionSuccessfull = mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
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

  async showOtherUsers(currentUserId) {
    try {
      await this.connectionSuccessfull;
      let otherUsers = await User.find(
        { _id: { $ne: currentUserId } },
        { password: 0, __v: 0 }
      );
      return otherUsers;
    } catch (err) {
      console.log(err.message);
    }
  }

  async sendMessageToAnotherUser(from, to, message_body, forwarded = null) {
    try {
      await this.connectionSuccessfull;
      let isSuccessfull = new Message({
        from: from,
        to: to,
        message_body: message_body,
        forwarded: forwarded,
      });

      await isSuccessfull.save();

      return isSuccessfull ? true : false;
    } catch (err) {
      console.log(err.message);
    }
  }

  async retrieveMessages(id) {
    try {
      await this.connectionSuccessfull;
      let messages = await Message.find({
        $or: [
          {
            from: { $eq: id },
          },
          {
            to: { $eq: id },
          },
        ],
      })
        .populate(["from", "to", "forwarded"])
        .exec();

      return messages;
    } catch (err) {
      console.log(err.message);
    }
  }
}

module.exports = ConnectionToDatabase;

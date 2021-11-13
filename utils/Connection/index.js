const mongoose = require("mongoose");
const { User } = require("../../models/User");

class ConnectionToDatabase {
  constructor() {
    const uri =
      "mongodb+srv://test-chat-app:testUser@cluster0.tc816.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
    mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
  }

  async addUser(username, password, email) {
    try {
      let newUser = new User(username, email, password);
      await newUser.save();
    } catch (err) {
      console.log(err);
    }
  }

  async addMessage()
}

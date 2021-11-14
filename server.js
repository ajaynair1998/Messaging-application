const express = require("express");
const app = express();
const cors = require("cors");
const signUp = require("./routes/sign-up");
const logIn = require("./routes/log-in");
const showUsers = require("./routes/show-users");
const sendMessage = require("./routes/send-message");
const showMessages = require("./routes/show-messages");
const PORT = 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// sign-up api -> returns id on successfull sign-up
app.use("/sign-up", signUp);

//  log-in api  -> return id on successful log-in
app.use("/log-in", logIn);

// list-users-api -> returns the choice for recipients
app.use("/show-users", showUsers);

// send-message-api
app.use("/send-message", sendMessage);

// current user's messages api
app.use("/show-messages", showMessages);

app.listen(PORT, () => {
  console.log(`API server listening at http://localhost:${PORT}`);
});

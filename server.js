const express = require("express");
const app = express();
const cors = require("cors");
const signUp = require("./routes/sign-up");
const logIn = require("./routes/log-in");
const PORT = 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// sign-up api -> returns id on successfull sign-up
app.use("/sign-up", signUp);

//  log-in api  -> return id on successful log-in
app.use("/log-in", logIn);

app.use("/show-users", showUsers);

app.listen(PORT, () => {
  console.log(`API server listening at http://localhost:${PORT}`);
});

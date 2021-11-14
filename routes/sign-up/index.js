const express = require("express");
const router = express.Router();

let ConnectionToDatabase = require("../../services/Connection");
let db = new ConnectionToDatabase();

// sign-up route
router.post("/", async (req, res) => {
  try {
    let { username, email, password } = req.body;
    let isSuccessfull = await db.addUser(username, password, email);
    isSuccessfull
      ? res.status(200).json({ success: true, user: { id: isSuccessfull._id } })
      : res.status(500).json({ success: false });
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;

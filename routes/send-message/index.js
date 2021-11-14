const express = require("express");
const router = express.Router();

let ConnectionToDatabase = require("../../services/Connection");
let db = new ConnectionToDatabase();

// send-message route
router.post("/", async (req, res) => {
  try {
    let { from, to, message_body, forwarded } = req.body;
    let isSuccessfull = await db.sendMessageToAnotherUser(
      from,
      to,
      message_body,
      forwarded
    );
    isSuccessfull
      ? res.status(200).json({ success: true })
      : res.status(500).json({ success: false });
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;

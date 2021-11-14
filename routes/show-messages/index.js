const express = require("express");
const router = express.Router();

let ConnectionToDatabase = require("../../services/Connection");
let db = new ConnectionToDatabase();

// show-messages route
router.get("/", async (req, res) => {
  try {
    let { id } = req.query;
    let messages = await db.retrieveMessages(id);
    messages
      ? res.status(200).json({ success: true, payload: messages })
      : res.status(500).json({ success: false });
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;

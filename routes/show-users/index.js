const express = require("express");
const router = express.Router();

let ConnectionToDatabase = require("../../services/Connection");
let db = new ConnectionToDatabase();

// show-users route
router.post("/", async (req, res) => {
  try {
    let { id } = req.body;
    let isSuccessfull = await db.showOtherUsers(id);
    isSuccessfull
      ? res.status(200).json({ success: true, users: isSuccessfull })
      : res.status(500).json({ success: false });
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;

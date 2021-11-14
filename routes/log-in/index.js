const express = require("express");
const router = express.Router();

let ConnectionToDatabase = require("../../utils/Connection");
let db = new ConnectionToDatabase();

// log-in route
router.post("/", async (req, res) => {
  try {
    let { username, email, password } = req.body;
    let isSuccessfull = await db.findUser(username, password);
    isSuccessfull
      ? res.status(200).json({ success: true, user: { id: isSuccessfull._id } })
      : res.status(500).json({ success: false });
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;

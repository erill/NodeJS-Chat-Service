const express = require("express");
const router = express.Router();
const { messages } = require("./tempData");

router.get("/", (req, res) => {
  if(messages) {
    res.json(messages);
  } else {
    res.status(404).json({});
  }
});

module.exports = router;
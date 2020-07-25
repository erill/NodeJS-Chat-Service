const express = require("express");
const router = express.Router({ mergeParams: true });
const { users } = require("./tempData");

router.get("/", (req, res) => {
  const { id } = req.params;
  const user = users.find(row => row.user_uuid === id);

  if (user) {
    res.json(user);
  } else {
    res.status(404).json({});
  }
});

module.exports = router;
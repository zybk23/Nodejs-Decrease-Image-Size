const express = require("express");
const profile = require("../models/profile");

const router = express.Router();

router.post("/register", async (req, res) => {
  const { name, password } = req.body;

  const user = await profile.create({
    name,
    password,
  });
  res.status(200).json({
    success: true,
    data: user.name,
    password: user.password,
    profile_image: user.profile_image,
    id: user._id,
  });
});

module.exports = router;

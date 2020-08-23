const express = require("express");
const imageUpload = require("../imageUpdate");
const profile = require("../models/profile");
const toRun = require("../index");

const router = express.Router();

router.post(
  "/upload",
  imageUpload.single("profile_image"),
  async (req, res) => {
    const user = await profile.findByIdAndUpdate(
      "5f3a70eaa058310af09c6320",
      {
        profile_image: req.savedProfileImage,
      },
      { new: true, runValidators: true }
    );
    toRun();
    res.status(200).json({
      success: true,
      message: user,
    });
  }
);

module.exports = router;

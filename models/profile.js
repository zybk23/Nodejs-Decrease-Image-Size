const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ProfilSchema = new Schema({
  name: {
    type: String,
    required: [true, "Please provide a name"],
  },
  password: {
    type: String,
    minlength: [6, "Please provide a password with min length"],
    required: [true, "Please provide a password"],
    select: false,
  },
  profile_image: {
    type: String,
    default: "default.jpg",
  },
});

module.exports = mongoose.model("Profile", ProfilSchema);

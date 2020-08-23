const multer = require("multer");

const path = require("path");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    const rootDir = path.dirname(require.main.filename);
    cb(null, path.join(rootDir, "/public/uploads"));
  },
  filename: function (req, file, cb) {
    const extension = file.mimetype.split("/")[1];
    req.savedProfileImage = "image_" + "." + extension;
    cb(null, req.savedProfileImage);
  },
});

const fileFilter = (req, file, cb) => {
  let allowedMimeTypes = ["image/jpg", "image/gif", "image/jpeg", "image/png"];
  if (!allowedMimeTypes.includes(file.mimetype)) {
    console.log("Please provide a valid image file");
  }
  return cb(null, true);
};

const profileImageUpload = multer({ storage, fileFilter });

module.exports = profileImageUpload;

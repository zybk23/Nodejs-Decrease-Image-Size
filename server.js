const express = require("express");
const path = require("path");
const connectDatabase = require("./connectDatabase");
const register = require("./routers/register");
const image_upload = require("./routers/upload_profile");

const app = express();

connectDatabase();

app.get("/", (req, res) => {
  res.send("First Page");
});

app.use(express.json());

app.use("/", register);
app.use("/", image_upload);

//Static Files
app.use(express.static(path.join(__dirname, "public")));

app.listen(5000, function () {
  console.log("server Started");
});

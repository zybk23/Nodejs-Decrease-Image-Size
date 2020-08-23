const mongoose = require("mongoose");

const connectDatabase = () => {
  mongoose
    .connect("mongodb://localhost/profile", {
      useNewUrlParser: true,
      useFindAndModify: false,
      useCreateIndex: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("MongoDb Connection Successfull");
    })
    .catch(() => {
      console.error("Hata");
    });
};

module.exports = connectDatabase;

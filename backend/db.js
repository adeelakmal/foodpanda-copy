const mongoose = require("mongoose");
const mongooseURI = "mongodb://localhost:27017";
const connect = () => {
  mongoose.connect(mongooseURI, () => {
    console.log("connected!");
  });
};

module.exports = connect;

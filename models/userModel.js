const mongoose = require("mongoose");

const User = mongoose.model(
  "User",
  new mongoose.Schema({
    userid: Number,
    author: String,
  })
);

module.exports = User;


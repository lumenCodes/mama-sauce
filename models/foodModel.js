const mongoose = require("mongoose");

const food = mongoose.model(
  "food",
  new mongoose.Schema({
    foodname: String,
    foodid: Number,
    status: String,
    numberOfPlatesAvailable: Number // I wnt this to be hidden
  })
);

module.exports = food;
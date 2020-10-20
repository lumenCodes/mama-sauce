const mongoose = require("mongoose");

const Order = mongoose.model(
  "Order",
  new mongoose.Schema({
    userid: Number,
    foodid: Number,
    createdAt: Date
  })
);

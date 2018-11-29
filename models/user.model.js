const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  fisstname: String,
  lastname: String,
  age: Number,
  birthday: Date,
  married: Boolean
});

module.exports = mongoose.model("User", userSchema);

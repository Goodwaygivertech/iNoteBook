// import mongoose from "mongoose";
const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema({
  meta: {
    votes: Number,
    favs: Number,
  },
  name: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
    unique:true
  },
  password: {
    type: String,
    require: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("user", userSchema);

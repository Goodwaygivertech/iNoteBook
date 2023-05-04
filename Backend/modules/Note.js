// import mongoose from "mongoose";
const mongoose = require("mongoose");
const { Schema } = mongoose;

const noteSchema = new Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
  },
  title: {
    type: String,
    require: true,

  },
  description: {
    type: String,
    require: true,
  },

  tag: {
    type: String,
    default: "genral",
  },
});

module.exports = mongoose.model("notes", noteSchema);

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ExcerciseSchema = new Schema({
  type: {
      type: String,
  required: true
  },
name: String,
duration: Number
});

const Excercise = mongoose.model("Excercise", ExcerciseSchema);

module.exports = Excercise;
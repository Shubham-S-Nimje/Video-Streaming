const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const dataSchema = new Schema({
  content: String,
  contentType: String,
  size: String,
  position: String,
});

module.exports = mongoose.model("Vdostreaming", dataSchema);

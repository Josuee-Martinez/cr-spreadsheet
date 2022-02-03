const mongoose = require("mongoose");

const SpreadsheetSchema = new mongoose.Schema({
   tag: {
      type: String,
   },
   battles: {
      type: Number,
   },
   name: {
      type: String,
   },
   fame: {
      type: Number,
   },
});

module.exports = Spreadsheet = mongoose.model("spreadsheet", SpreadsheetSchema);

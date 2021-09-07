const mongoose = require("mongoose");

const SpreadsheetSchema = new mongoose.Schema({
   tag: {
      type: String,
   },
   player: {
      type: String,
   },
   numberOfWars: {
      type: Number,
   },
   atFame: {
      type: Number,
   },
});

module.exports = Spreadsheet = mongoose.model("spreadsheet", SpreadsheetSchema);

const mongoose = require("mongoose");

const SpreadsheetSchema = new mongoose.Schema({
   player: {
      type: String,
   },
   atFame: {
      type: String,
   },
   battleAvg: {
      type: String,
   },
   dayAvg: {
      type: String,
   },
});

module.exports = Spreadsheet = mongoose.model("spreadsheet", SpreadsheetSchema);

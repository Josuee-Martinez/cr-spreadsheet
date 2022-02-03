const { Router } = require("express");
const axios = require("axios");
const router = Router();
const Spreadsheet = require("../models/Spreadsheet");

router.get("/", async (req, res) => {
   try {
      const spreadsheetData = await Spreadsheet.find({});

      res.json(spreadsheetData);
   } catch (error) {
      console.error(error.message, "k");
   }
});

module.exports = router;

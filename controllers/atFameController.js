const { Router } = require("express");
const axios = require("axios");
const router = Router();
const Spreadsheet = require("../models/Spreadsheet");

router.get("/", async (req, res) => {
   try {
      const atFame = await Spreadsheet.find();

      res.json(atFame);
   } catch (error) {
      console.error(error.message);
   }
});

module.exports = router;

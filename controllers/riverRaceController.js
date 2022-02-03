const { Router } = require("express");
const axios = require("axios");
const router = Router();
const Spreadsheet = require("../models/Spreadsheet");

router.get("/", async (req, res) => {
   const key = `${process.env.API_KEY}`;
   try {
      const config = {
         headers: {
            Authorization: `Bearer ${key}`,
         },
      };

      const response = await axios.get(
         "https://api.clashroyale.com/v1/clans/%232YRYJG/riverracelog",
         config
      );

      res.json(response.data);
   } catch (error) {
      console.error(error.message, "h");
   }
});

module.exports = router;

const { Router } = require("express");
const axios = require("axios");
const router = Router();
const Spreadsheet = require("../models/Spreadsheet");

router.get("/", async (req, res) => {
   try {
      const config = {
         headers: {
            Authorization: `Bearer ${process.env.API_KEY}`,
         },
      };

      const response = await axios.get(
         "https://api.clashroyale.com/v1/clans/%232YRYJG/riverracelog",
         config
      );

      res.json(response.data);

      // res`.`json(
      //    // response.data.items[0].standings
      //    //    .filter((std) => std.clan.name === "Fire and Ice")[0]
      //    //    .clan.participants.map((participant) => {
      //    //       return { player: participant.name, fame: participant.fame };
      //    //    })
      //    response.data.items[0].createdDate
      // );
   } catch (error) {
      console.error(error.message);
   }
});

router.get("/test", async (req, res) => {
   res.json({ hello: "hello" });
});

router.post("/", async (req, res) => {
   const { player, atFame, battleAvg, dayAvg } = req.body;

   const spreadsheetData = {};

   if (player) spreadsheetData.player = player;
   if (atFame) spreadsheetData.atFame = atFame;
   if (battleAvg) spreadsheetData.battleAvg = battleAvg;
   if (dayAvg) spreadsheetData.dayAvg = dayAvg;

   try {
      let spreadsheet = await Spreadsheet.findOneAndUpdate(
         { $set: spreadsheetData },
         { new: true, upsert: true }
      );
      res.json(spreadsheet);
   } catch (err) {
      console.error(err.message);
      res.status(500).send("server error");
   }
   console.log(spreadsheetData);
});

module.exports = router;

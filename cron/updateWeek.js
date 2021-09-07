const CronJob = require("cron").CronJob;
const axios = require("axios");

const Spreadsheet = require("../models/Spreadsheet");
const job = () => {
   // console.log("Before job instantiation");
   const jobi = new CronJob("00 00 6 * * 1", async function () {
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

         console.log(
            response.data.items[0].standings.filter(
               (clan) => clan.clan.name === "Fire and Ice"
            )[0].clan.participants
         );

         response.data.items[0].standings
            .filter((clan) => clan.clan.name === "Fire and Ice")[0]
            .clan.participants.map(async (participant) => {
               try {
                  const existingData = await Spreadsheet.findOne({
                     tag: participant.tag,
                  });

                  if (!existingData) {
                     const spreadsheetData = {};
                     if (participant) spreadsheetData.tag = participant.tag;
                     if (participant) spreadsheetData.player = participant.name;
                     if (participant) spreadsheetData.numberOfWars = 1;
                     if (participant) spreadsheetData.atFame = participant.fame;

                     await Spreadsheet.findOneAndUpdate(
                        { tag: participant.tag },
                        { $set: spreadsheetData },
                        { new: true, upsert: true }
                     );
                  } else {
                     const spreadsheetData = {};
                     if (participant) spreadsheetData.tag = participant.tag;
                     if (participant) spreadsheetData.player = participant.name;
                     if (participant)
                        spreadsheetData.numberOfWars =
                           1 + existingData.numberOfWars;

                     if (participant)
                        spreadsheetData.atFame =
                           participant.fame + existingData.atFame;

                     await Spreadsheet.findOneAndUpdate(
                        { tag: participant.tag },
                        { $set: spreadsheetData },
                        { new: true, upsert: true }
                     );
                  }
               } catch (error) {
                  console.log(error);
               }
            });
      } catch (error) {
         console.log(error);
      }
   });

   jobi.start();
};

module.exports = job;

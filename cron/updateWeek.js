const CronJob = require("cron").CronJob;
const axios = require("axios");

const Spreadsheet = require("../models/Spreadsheet");
const job = () => {
   // "00 31 5 * * 0-6"
   const jobi = new CronJob("0 */1 * * * *", async function () {
      let status = "";
      let arr = [];
      const key = `${process.env.API_KEY}`;
      try {
         const config = {
            headers: {
               Authorization: `Bearer ${key}`,
            },
         };

         const response = await axios.get(
            "https://api.clashroyale.com/v1/clans/%232YRYJG/currentriverrace",
            config
         );
         console.log(response.data);
         status = response.data.periodType;
         response.data.clans.map((clan) =>
            clan.participants.map((pt) =>
               arr.push({
                  tag: pt.tag,
                  battles: Number(pt.decksUsedToday),
                  name: pt.name,
                  fame: Number(pt.fame),
               })
            )
         );
      } catch (error) {
         console.log(error, "p");
      }

      try {
         // if (status !== "training") {
         arr.map(async (participant) => {
            const existingData = await Spreadsheet.findOne({
               tag: participant.tag,
            });

            if (!existingData) {
               const spreadsheetData = {};
               if (participant) spreadsheetData.tag = participant.tag;

               if (participant) spreadsheetData.battles = participant.battles;

               if (participant) spreadsheetData.name = participant.name;

               if (participant) spreadsheetData.fame = participant.fame;

               await Spreadsheet.findOneAndUpdate(
                  { tag: participant.tag },
                  { $set: spreadsheetData },
                  { new: true, upsert: true }
               );
            } else {
               const spreadsheetData = {};
               if (participant) spreadsheetData.tag = participant.tag;

               if (participant)
                  spreadsheetData.battles =
                     participant.battles + existingData.battles;

               if (participant) spreadsheetData.name = participant.name;

               if (participant)
                  spreadsheetData.fame = participant.fame + existingData.fame;

               await Spreadsheet.findOneAndUpdate(
                  { tag: participant.tag },
                  { $set: spreadsheetData },
                  { new: true, upsert: true }
               );
            }
         });
         // }
      } catch (error) {
         console.log(error, "l");
      }
      // console.log(arr);
   });

   jobi.start();
};

module.exports = job;

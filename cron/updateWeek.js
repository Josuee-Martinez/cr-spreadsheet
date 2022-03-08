const CronJob = require("cron").CronJob;
const axios = require("axios");

const Spreadsheet = require("../models/Spreadsheet");
const job = () => {
   // Cron job to run everyday at a set time
   const jobi = new CronJob("00 50 4 * * 0-6", async function () {
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
         // console.log(response.data);
         status = response.data.periodType;
         //Check and only loop if not on training days
         if (status !== "training") {
            response.data.clans.map((clan) =>
               clan.participants.map((pt) =>
                  arr.push({
                     tag: pt.tag,
                     battles: Number(pt.decksUsedToday),
                     name: pt.name,
                     fame: Number(pt.fame),
                     clanTag: clan.tag,
                  })
               )
            );
         }
      } catch (error) {
         console.log(error, "p");
      }

      try {
         //Save only when not in training. AKA on battles days only
         if (status !== "training") {
            arr.map(async (participant) => {
               const existingData = await Spreadsheet.findOne({
                  tag: participant.tag,
               });

               if (!existingData) {
                  const spreadsheetData = {};
                  if (participant) spreadsheetData.tag = participant.tag;

                  if (participant)
                     spreadsheetData.battles = participant.battles;

                  if (participant) spreadsheetData.name = participant.name;

                  if (participant) spreadsheetData.fame = participant.fame;

                  if (participant)
                     spreadsheetData.clanTag = participant.clanTag;

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
                     spreadsheetData.fame =
                        participant.fame + existingData.fame;

                  if (participant)
                     spreadsheetData.clanTag = participant.clanTag;

                  await Spreadsheet.findOneAndUpdate(
                     { tag: participant.tag },
                     { $set: spreadsheetData },
                     { new: true, upsert: true }
                  );
               }
            });
         }
      } catch (error) {
         console.log(error, "l");
      }
      arr = [];
      console.log("this is it ->", arr.length);
   });

   jobi.start();
};

module.exports = job;

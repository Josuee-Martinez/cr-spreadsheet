require("dotenv").config();
const CronJob = require("cron").CronJob;

const express = require("express");
const app = express();
const connectDB = require("./config/db");
const job = require("./cron/updateWeek");
connectDB();
job();
const riveRaceController = require("./controllers/riverRaceController");
const currentRiveRaceController = require("./controllers/currentRiverRaceController");
const spreadsheet = require("./controllers/spreadsheet");

app.use(require("./middleware/headers"));
app.use(express.json({ extended: false }));
app.use("/api/riverRace", riveRaceController);
app.use("/api/currentRiverRace", currentRiveRaceController);
app.use("/api/spreadsheet", spreadsheet);

// console.log("Before job instantiation");
// const job = new CronJob("00 00 6 * * 1", function () {
//    const d = new Date();
//    console.log("At Ten Minutes:", d);
// });
// console.log("After job instantiation");
// job.start();

app.listen(5000, console.log("running"));

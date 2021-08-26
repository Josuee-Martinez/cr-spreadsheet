require("dotenv").config();
const express = require("express");
const app = express();
const riveRaceController = require("./controllers/riverRaceController");
const currentRiveRaceController = require("./controllers/currentRiverRaceController");

app.use(require("./middleware/headers"));

app.use("/api/riverRace", riveRaceController);
app.use("/api/currentRiverRace", currentRiveRaceController);

app.listen(5000, console.log("running"));

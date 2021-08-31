require("dotenv").config();
const express = require("express");
const app = express();
const connectDB = require("./config/db");
connectDB();
const riveRaceController = require("./controllers/riverRaceController");
const currentRiveRaceController = require("./controllers/currentRiverRaceController");
app.use(require("./middleware/headers"));
app.use(express.json({ extended: false }));
app.use("/api/riverRace", riveRaceController);
app.use("/api/currentRiverRace", currentRiveRaceController);

app.listen(5000, console.log("running"));

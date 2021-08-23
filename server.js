require("dotenv").config();
const express = require("express");
const app = express();
const riveRaceController = require("./controllers/riverRaceController");

app.use(require("./middleware/headers"));

app.use("/api/riverRace", riveRaceController);

app.listen(5000, console.log("running"));

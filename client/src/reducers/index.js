import { combineReducers } from "redux";

import riverRaceData from "./riverRaceData";
import currentRiverRaceData from "./currentRiverRaceData";
import spreadsheetData from "./spreadsheet";

export default combineReducers({
   riverRaceData,
   currentRiverRaceData,
   spreadsheetData,
});

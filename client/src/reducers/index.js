import { combineReducers } from "redux";

import riverRaceData from "./riverRaceData";
import currentRiverRaceData from "./currentRiverRaceData";

export default combineReducers({
   riverRaceData,
   currentRiverRaceData,
});

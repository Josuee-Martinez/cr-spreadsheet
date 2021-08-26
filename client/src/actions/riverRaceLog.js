import axios from "axios";
import {
   RIVERRACE_DATA,
   RIVERRACE_ERROR,
   CURRENTRIVERRACE_DATA,
   CURRENTRIVERRACE_ERROR,
} from "./types";

export const getRiverRaceLog = () => async (dispatch) => {
   try {
      const res = await axios.get(`http://localhost:5000/api/riverRace`);

      dispatch({ type: RIVERRACE_DATA, payload: res.data });
   } catch (error) {
      dispatch({
         type: RIVERRACE_ERROR,
         payload: { error },
      });
   }
};

export const getCurrentRiverRaceData = () => async (dispatch) => {
   try {
      const res = await axios.get(`http://localhost:5000/api/currentRiverRace`);

      dispatch({ type: CURRENTRIVERRACE_DATA, payload: res.data });
   } catch (error) {
      dispatch({
         type: CURRENTRIVERRACE_ERROR,
         payload: { error },
      });
   }
};

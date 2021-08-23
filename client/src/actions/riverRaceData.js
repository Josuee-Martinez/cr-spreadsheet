import axios from "axios";
import { RIVERRACE_DATA, RIVERRACE_ERROR } from "./types";

export const getRiverRaceData = () => async (dispatch) => {
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

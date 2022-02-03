import axios from "axios";
import { SPREADSHEET_DATA, SPREADSHEET_ERROR } from "./types";

export const getSpreadsheetData = () => async (dispatch) => {
   try {
      const res = await axios.get(`http://localhost:5000/api/spreadsheet`);

      dispatch({ type: SPREADSHEET_DATA, payload: res.data });
   } catch (error) {
      dispatch({
         type: SPREADSHEET_ERROR,
         payload: { error },
      });
   }
};

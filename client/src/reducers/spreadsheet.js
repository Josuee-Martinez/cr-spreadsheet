import { SPREADSHEET_DATA, SPREADSHEET_ERROR } from "../actions/types";

const initialState = {
   data: null,
};

export default function (state = initialState, action) {
   const { type, payload } = action;

   switch (type) {
      case SPREADSHEET_DATA:
         console.log(payload);

         return {
            ...state,
            data: payload,
         };
      case SPREADSHEET_ERROR:
         console.log(payload.error.message);
         return {
            ...state,
            errorMessage: payload.error.message,
         };
      default:
         return state;
   }
}

import {
   CURRENTRIVERRACE_DATA,
   CURRENTRIVERRACE_ERROR,
} from "../actions/types";

const initialState = {
   clan: null,
};

export default function (state = initialState, action) {
   const { type, payload } = action;

   switch (type) {
      case CURRENTRIVERRACE_DATA:
         console.log(payload);
         return {
            ...state,
            clan: payload,
         };
      case CURRENTRIVERRACE_ERROR:
         console.log(payload.error.message);
         return {
            ...state,
            errorMessage: payload.error.message,
         };
      default:
         return state;
   }
}

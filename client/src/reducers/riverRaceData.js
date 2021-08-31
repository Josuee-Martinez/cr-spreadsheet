import {
   RIVERRACE_DATA,
   RIVERRACE_ERROR,
   CURRENTRIVERRACE_DATA,
   CURRENTRIVERRACE_ERROR,
} from "../actions/types";

const initialState = {
   items: null,
   clan: null,
};

export default function (state = initialState, action) {
   const { type, payload } = action;

   switch (type) {
      case RIVERRACE_DATA:
         console.log(payload);
         return {
            ...state,
            items: payload.items,
         };
      case CURRENTRIVERRACE_DATA:
         console.log(payload);
         return {
            ...state,
            clan: payload,
         };
      case (RIVERRACE_ERROR, CURRENTRIVERRACE_ERROR):
         console.log(payload.error.message);
         return {
            ...state,
            errorMessage: payload.error.message,
         };
      default:
         return state;
   }
}

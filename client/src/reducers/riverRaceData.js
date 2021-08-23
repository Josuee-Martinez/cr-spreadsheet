import { RIVERRACE_DATA, RIVERRACE_ERROR } from "../actions/types";

const initialState = {
   items: [],
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
      case RIVERRACE_ERROR:
         console.log(payload.error.message);
         return {
            ...state,
            errorMessage: payload.error.message,
         };
      default:
         return state;
   }
}

import { GET_COSTUMERS } from "./constant";

let initialState = {
  dataCostumer: [],
};

const costumersReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_COSTUMERS:
      return { ...state, dataCostumer: action.payload };
    default:
      return state;
  }
};

export default costumersReducer;

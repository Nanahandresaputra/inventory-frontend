import { GET_SALES } from "./constant";

let initialState = {
  salesData: [],
};

const salesReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_SALES:
      return { ...state, salesData: action.payload };

    default:
      return state;
  }
};

export default salesReducer;

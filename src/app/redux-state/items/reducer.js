import { GET_ITEMS } from "./constant";

let initialState = {
  dataItems: [],
};

const itemsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ITEMS:
      return { ...state, dataItems: action.payload };
    default:
      return state;
  }
};

export default itemsReducer;

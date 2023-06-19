import thunk from "redux-thunk";
import { applyMiddleware, combineReducers, createStore, compose } from "redux";
import costumersReducer from "./costumers/reducer";
import itemsReducer from "./items/reducer";
import salesReducer from "./sales/reducer";

const composeEnhancers = Window.__REDUX_DEVTOOS_COMPOSE__ || compose;
const rootReducers = combineReducers({
  costumer: costumersReducer,
  items: itemsReducer,
  sales: salesReducer,
});

const store = createStore(rootReducers, composeEnhancers(applyMiddleware(thunk)));

export default store;

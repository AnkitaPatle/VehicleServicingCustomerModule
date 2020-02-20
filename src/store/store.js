import thunk from "redux-thunk";
import { applyMiddleware, createStore } from "redux";
//import { createLogger } from "redux-logger";
import rootReducer from "./reducer";

const store = initialState => {
  // const logger = createLogger();
  const store = createStore(rootReducer, initialState, applyMiddleware(thunk));
  return store;
};

export default store;
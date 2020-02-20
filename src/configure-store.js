import { createStore, applyMiddleware, compose } from "redux";
import thunkMiddleware from "redux-thunk";
import { createLogger } from "redux-logger";

import RootReducer from "./reducer/RootReducer";

//Remove this logger in production
const loggerMiddleware = createLogger();

export default function configureStore(preloadedState) {
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  return createStore(
    RootReducer,
    preloadedState,
    composeEnhancers(applyMiddleware(thunkMiddleware, loggerMiddleware))
  );
}

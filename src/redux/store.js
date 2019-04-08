import { createStore, applyMiddleware, combineReducers } from "redux";
import layoutReducer from "./reducers/layout-reducer";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
  layouts: layoutReducer
});

const composeEnhancers = composeWithDevTools({});
export default createStore(
  rootReducer,
  /* preloadedState, */ composeEnhancers(applyMiddleware(thunk))
);

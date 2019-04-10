import { createStore, applyMiddleware, combineReducers } from "redux";
import layoutReducer from "./reducers/layout-reducer";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import {
  syncedReducer,
  syncMiddleware
} from "../../node_modules/redux-sync-reducer";

const rootReducer = combineReducers({
  layouts: syncedReducer(layoutReducer)
});

const composeEnhancers = composeWithDevTools({});
export default createStore(
  rootReducer,
  /* preloadedState, */ composeEnhancers(applyMiddleware(thunk, syncMiddleware))
);

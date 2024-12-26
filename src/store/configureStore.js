import { applyMiddleware, createStore, compose } from "redux";
import reducer from "./reducers";
import api from "./middleware/api"; 

const composedEnhancers = compose(
  applyMiddleware(api),
  window.__REDUX_DEVTOOLS_EXTENSION__
    ? window.__REDUX_DEVTOOLS_EXTENSION__()
    : (f) => f 
);

const store = createStore(reducer, composedEnhancers);

export default store;

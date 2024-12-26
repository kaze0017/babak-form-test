import { combineReducers } from "redux";
import userReducer from "./slices/user";
import apiReducer from "./slices/api";

const reducer = combineReducers({
  user: userReducer,
  api: apiReducer,
});

export default reducer;

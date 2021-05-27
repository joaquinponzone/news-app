import { combineReducers } from "redux";
import { getNewsReducer } from "./NewsReducer";

const rootReducer = combineReducers({
  news: getNewsReducer,
});

export default rootReducer;

import { combineReducers } from "redux";
import topNews from "./topNewsReducer";

const rootReducer = combineReducers({
  topNews,
});

export default rootReducer;

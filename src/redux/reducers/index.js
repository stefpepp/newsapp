import { combineReducers } from "redux";
import country from "./countryReducer";
import articles from "./articlesReducer";

const rootReducer = combineReducers({
  country,
  articles,
});

export default rootReducer;

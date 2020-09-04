import * as actions from "../actions/actionTypes";
import initialState from "./initialState";

export default function articlesReducer(state = initialState.articles, action) {
  switch (action.type) {
    case actions.STORE_ARTICLES:
      return [...action.articles];
    default:
      return state;
  }
}

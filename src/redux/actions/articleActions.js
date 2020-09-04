import * as actionTypes from "./actionTypes";

export function storeArticles(articles) {
  return function (dispatch) {
    dispatch({ type: actionTypes.STORE_ARTICLES, articles });
  };
}

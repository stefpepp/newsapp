import * as actionTypes from "./actionTypes";

export function chooseCountry(shortName) {
  return function (dispatch) {
    dispatch({ type: actionTypes.CHOOSE_COUNTRY, shortName });
  };
}

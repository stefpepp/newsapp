import * as actions from "../actions/actionTypes";
import initialState from "./initialState";

export default function countryReducer(state = initialState.country, action) {
  switch (action.type) {
    case actions.CHOOSE_COUNTRY:
      return { ...state, shortName: action.shortName };
    default:
      return state;
  }
}

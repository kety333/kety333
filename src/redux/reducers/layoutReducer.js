import * as types from "../actions/actionTypes";

export default function layotReducer(state = [], action) {
  switch (action.type) {
    case types.UPDATE_LAYOUT:
      return [...state, { ...action.layouts }];
    default:
      return state;
  }
}

import * as types from "./actionTypes";

export function updateLayout(layout) {
  return { type: types.UPDATE_LAYOUT, layout };
}

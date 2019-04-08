export const UPDATE_LAYOUT = "UPDATE_LAYOUT";

export function updateLayout(layoutInfo) {
  return { type: UPDATE_LAYOUT, payload: layoutInfo };
}

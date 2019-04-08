import LayoutService from "../../services/layoutService";
import { UPDATE_LAYOUT } from "../actions/layout-actions";

const initialState = { layouts: LayoutService.getLayouts() };

export default function layoutReducer(state = initialState, action) {
  switch (action.type) {
    case UPDATE_LAYOUT:
      var oldItem =
        state[action.payload.layoutId].layout[action.payload.targetItemId];
      var newLayoutItem = { ...oldItem };
      newLayoutItem.draggedValue = action.payload.dreggetItemId;
      var oldLayout = state[action.payload.layoutId].layout;
      var newLayout = [...oldLayout];
      newLayout[action.payload.targetItemId] = newLayoutItem;
      var newLayoutObject = { ...state[action.payload.layoutId] };
      newLayoutObject.layout = newLayout;
      var newState = [...state];
      newState[action.payload.layoutId] = newLayoutObject;

      return newState;

    default:
      return state;
  }
}

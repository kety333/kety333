import * as types from "../actions/actionTypes";

export default function layoutReducer(state = [], action) {
  switch (action.type) {
    case types.UPDATE_LAYOUT: {
        const newLayouts = [...state];
        for (let propertyName in newLayouts) {
            if (newLayouts[propertyName].id === action.payload.id)
                newLayouts[propertyName].value = action.payload.value;
        }
        return {...state, layouts: newLayouts};
    }
    default:
      return state;
  }
}

import types from './types'

const INITIAL_STATE = {
  droidsName: "Favorite",
  list: ["R2D2", "C3PO", "BB8"],
};

const droidsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.RESET_DROIDS:
      return {
        ...state,
        list: [],
      };
    case types.ADD_DROID:
        return {
        ...state,
        list: [...state.list, action.item],
        };
    default:
        return state;
  }
};

export default droidsReducer

import types from './types'

const INITIAL_STATE = {
  droidsName: "Types",
  list: [],
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

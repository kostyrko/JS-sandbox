import types from './types'

const INITIAL_STATE = {
    listName: 'working droids',
    list : [
        "Protocol droid", "Astromech droid", "Power droid", "Utility droid"
    ]
    }

const droidsClassReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.RESET_DROIDS_CLASS:
      return {
        ...state,
        list: [],
      };
    case types.ADD_DROID_CLASS:
        return {
        ...state,
        list: [...state.list, action.item],
        };
    default:
        return state;
  }
};

export default droidsClassReducer

import * as types from '../constants/timeline';

const initialState = {
  all: types.ALL_TIMELINE,
  current: types.DEFAULT_TIMELINE,
  isUpdating: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case (types.UPDATE_CURRENT_TIMELINE_REQUEST): {
      return {
        ...state,
        isUpdating: true,
      };
    }

    case (types.UPDATE_CURRENT_TIMELINE): {
      const { step } = action.payload;
      return {
        ...state,
        isUpdating: false,
        current: state.all[step],
      };
    }

    default:
      return state;
  }
};

import * as types from '../constants/timeline';

const initialState = {
  allTimeline: types.ALL_TIMELINE,
  currentTimeline: types.DEFAULT_TIMELINE,
  isUpdatingTimeline: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case (types.UPDATE_CURRENT_TIMELINE_REQUEST): {
      return {
        ...state,
        isUpdatingTimeline: true,
      };
    }

    case (types.UPDATE_CURRENT_TIMELINE): {
      const { nextTimeline } = action.payload;
      return {
        ...state,
        isUpdatingTimeline: false,
        currentTimeline: nextTimeline,
      };
    }

    default:
      return state;
  }
};

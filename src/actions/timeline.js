import {
  UPDATE_CURRENT_TIMELINE_REQUEST,
  UPDATE_CURRENT_TIMELINE,
} from '../constants/timeline';

export const updateTimeline = nextTimeline => (dispatch) => {
  dispatch({
    type: UPDATE_CURRENT_TIMELINE_REQUEST,
  });

  dispatch({
    type: UPDATE_CURRENT_TIMELINE,
    payload: {
      nextTimeline,
    },
  });
};

export const nothing = () => 'hello';

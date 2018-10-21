import {
  UPDATE_CURRENT_TIMELINE_REQUEST,
  UPDATE_CURRENT_TIMELINE,
} from '../constants/timeline';

export const updateTimeline = step => (dispatch) => {
  dispatch({
    type: UPDATE_CURRENT_TIMELINE_REQUEST,
  });

  dispatch({
    type: UPDATE_CURRENT_TIMELINE,
    payload: {
      step,
    },
  });
};

export const nothing = () => 'hello';

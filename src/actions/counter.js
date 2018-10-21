import {
  INCREMENT_REQUESTED,
  INCREMENT,
  DECREMENT_REQUESTED,
  DECREMENT,
} from '../constants/counter';

export const increment = () => (dispatch) => {
  dispatch({
    type: INCREMENT_REQUESTED,
  });

  dispatch({
    type: INCREMENT,
  });
};

export const incrementAsync = () => (dispatch) => {
  dispatch({
    type: INCREMENT_REQUESTED,
  });

  return setTimeout(() => {
    dispatch({
      type: INCREMENT,
    });
  }, 3000);
};

export const decrement = () => (dispatch) => {
  dispatch({
    type: DECREMENT_REQUESTED,
  });

  dispatch({
    type: DECREMENT,
  });
};

export const decrementAsync = () => (dispatch) => {
  dispatch({
    type: DECREMENT_REQUESTED,
  });

  return setTimeout(() => {
    dispatch({
      type: DECREMENT,
    });
  }, 3000);
};

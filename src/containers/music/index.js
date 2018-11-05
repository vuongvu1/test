/* eslint-disable */

import React from 'react';

const Music = (props) => {
  const { url, play } = props;

  const audio = new Audio(url);
  if (play) {
    audio.play();
  } else {
    audio.pause();
  }

  return null;
}

export default Music;

/* eslint-disable */

import React, { Component } from 'react';
import { Animated } from 'react-web-animation';
import ClockAnimation from '../../../animation/clock';

import './index.scss';

const Path = props => {
  const { timeline, playState } = props;

  return (
    <ClockAnimation
      playState={playState}
      content={(
        <div className="pathFocus">Hello</div>
      )}
    />
  );
}

export default Path;

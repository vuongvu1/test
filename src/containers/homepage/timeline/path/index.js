/* eslint-disable */

import React, { Component } from 'react';
import { Animated } from 'react-web-animation';

import './index.scss';

const Path = props => {

    const { timeline, playState } = props;

    const getKeyFrames = () => {
        return [
            { transform: 'scale(1)',    opacity: 1,     offset: 0 },
            { transform: 'scale(1.5)',   opacity: 0.7,   offset: 0.1 },
            { transform: 'scale(1.6)',   opacity: 0.6,   offset: 0.2 },
            { transform: 'scale(1.7)',   opacity: 0.5,   offset: 0.3 },
            { transform: 'scale(1)',   opacity: 1,   offset: 1 }
        ];
    };

    const getTiming = (duration) => {
        return {
            duration,
            easing: 'ease',
            delay: 0,
            iterations: 1,
            direction: 'alternate',
            fill: 'forwards'
        };
    };

    return (
      // <Animated.div
      //   keyframes={getKeyFrames()}
      //   timing={getTiming(1500)}
      //   playState={'paused'}
      //   className="pathFocus"
      // >
      //   {/* <div>
      //     {timeline}
      //   </div> */}
      // </Animated.div>

      <div className="pathFocus">hello</div>
    );
}

export default Path;

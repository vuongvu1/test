/* eslint-disable */

import React from 'react';
import { Animated } from 'react-web-animation';

const ClockAnimation = (props) => {
  const { playState, content } = props;

  const getKeyFrames = () => [
    { transform: 'matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)', offset: 0 },
    { transform: 'matrix3d(0.763, 0.652, 0, 0, -0.501, 0.871, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)', offset: 0.032 },
    { transform: 'matrix3d(0.614, 0.797, 0, 0, -0.649, 0.768, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)', offset: 0.043 },
    { transform: 'matrix3d(0.325, 0.953, 0, 0, -0.853, 0.534, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)', offset: 0.0641 },
    { transform: 'matrix3d(0.083, 1.002, 0, 0, -0.961, 0.296, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)', offset: 0.0861 },
    { transform: 'matrix3d(-0.149, 0.992, 0, 0, -1.003, -0.001, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)', offset: 0.1271 },
    { transform: 'matrix3d(-0.154, 0.991, 0, 0, -1.003, -0.01, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)', offset: 0.1291 },
    { transform: 'matrix3d(-0.181, 0.984, 0, 0, -0.994, -0.111, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)', offset: 0.1722 },
    { transform: 'matrix3d(-0.163, 0.987, 0, 0, -0.994, -0.116, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)', offset: 0.1892 },
    { transform: 'matrix3d(-0.066, 0.998, 0, 0, -0.998, -0.067, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)', offset: 0.2523 },
    { transform: 'matrix3d(-0.028, 1, 0, 0, -0.999, -0.037, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)', offset: 0.2833 },
    { transform: 'matrix3d(-0.004, 1, 0, 0, -1, -0.015, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)', offset: 0.3143 },
    { transform: 'matrix3d(0.013, 1, 0, 0, -1, 0.007, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)', offset: 0.3944 },
    { transform: 'matrix3d(0, 1, 0, 0, -1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)', offset: 0.5646 },
    { transform: 'matrix3d(-0.001, 1, 0, 0, -1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)', offset: 0.6166 },
    { transform: 'matrix3d(0, 1, 0, 0, -1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)', offset: 0.8148 },
    { transform: 'matrix3d(0, 1, 0, 0, -1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)', offset: 0.8398 },
    { transform: 'matrix3d(0, 1, 0, 0, -1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)', offset: 1 },
  ];

  const getTiming = duration => ({
    duration,
    easing: 'linear',
    delay: 0,
    iterations: Infinity,
    direction: 'alternate',
    fill: 'forwards',
  });

  return (
    <Animated.div
      keyframes={getKeyFrames()}
      timing={getTiming(1000)}
      playState={playState}
    >
      {content} 
    </Animated.div>
  );
};

export default ClockAnimation;

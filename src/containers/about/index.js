/* eslint-disable */

import React, { Component } from 'react';
import { Animated } from 'react-web-animation';


const About = props => {
    const getKeyFrames = () => {
        return [
            { transform: 'scale(1)',    opacity: 1,     offset: 0 },
            { transform: 'scale(.5)',   opacity: 0.5,   offset: 0.3 },
            { transform: 'scale(.667)', opacity: 0.667, offset: 0.7875 },
            { transform: 'scale(.6)',   opacity: 0.6,   offset: 1 }
        ];
    };

    const getTiming = (duration) => {
        return {
            duration,
            easing: 'ease-in-out',
            delay: 0,
            iterations: Infinity,
            direction: 'alternate',
            fill: 'forwards'
        };
    };

    return (
      <Animated.div keyframes={getKeyFrames()}
        timing={getTiming(2500)}>
          Web Animations API Rocks
          <div>Hello</div>
      </Animated.div>
    );
}

export default About;

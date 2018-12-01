/* eslint-disable */

import React from 'react';
import PropTypes from 'prop-types';

import Path from './path';
import './index.scss';

const Timeline = (props) => {
  const { timeline, updateTimeline } = props;
  const { title, step } = timeline;

  return (
    <div className="timeline-container">
      <p>
        {`Current timeline: ${title}`}
      </p>
      <p className="timeline">
        <Path timeline={title} playState={step === 0 ? 'running' : 'paused'} />
      </p>
      <p>
        <button type="button" onClick={() => updateTimeline(step - 1)}>Previous</button>
        <button type="button" onClick={() => updateTimeline(step + 1)}>Next</button>
      </p>
      <iframe width='640' height='266' src='https://hlfc.matchat.online/embed/pjZJkIxua2' style={{ border: 'none' }} allowFullScreen></iframe>
    </div>
  );
};

// Timeline.propTypes = {
//   timeline: PropTypes.string,
//   step: PropTypes.number,
//   updateTimeline: PropTypes.func, // eslint-disable-line
// };

// Timeline.defaultProps = {
//   timeline: '',
//   step: 0,
// };

export default Timeline;

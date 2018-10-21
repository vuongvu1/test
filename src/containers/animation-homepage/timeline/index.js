import React from 'react';
import PropTypes from 'prop-types';

import './index.scss';

const Timeline = (props) => {
  const { timeline, step, updateTimeline } = props;

  console.log({ props });

  return (
    <div>
      <p>
        {`Current timeline: ${timeline}`}
      </p>
      <p>
        <button type="button" onClick={() => updateTimeline(step - 1)}>Previous</button>
        <button type="button" onClick={() => updateTimeline(step + 1)}>Next</button>
      </p>
    </div>
  );
};

Timeline.propTypes = {
  timeline: PropTypes.string,
  step: PropTypes.number,
  updateTimeline: PropTypes.func, // eslint-disable-line
};

Timeline.defaultProps = {
  timeline: '',
  step: 0,
};

export default Timeline;

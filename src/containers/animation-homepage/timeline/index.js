import React from 'react';
import PropTypes from 'prop-types';

import './index.scss';

const Timeline = (props) => {
  const { currentTimeline } = props;

  return (
    <div>
      current timeline:
      {currentTimeline}
    </div>
  );
};

Timeline.propTypes = {
  currentTimeline: PropTypes.string,
};

Timeline.defaultProps = {
  currentTimeline: 1,
};

export default Timeline;

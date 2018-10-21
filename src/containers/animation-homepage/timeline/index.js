import React from 'react';

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

export default Timeline;

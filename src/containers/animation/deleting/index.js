import React from 'react';
import PropsTypes from 'prop-types';

import './index.scss';

const Deleting = (props) => {
  const { content } = props;

  return (
    <div className="delete-wrapper">
      <h1>
        {content}
        <span>&nbsp;</span>
      </h1>
    </div>
  );
};

Deleting.propTypes = {
  content: PropsTypes.string,
};

Deleting.defaultProps = {
  content: 'HAPPY OUR FIRST YEAR ANNIVERSARY!!',
};

export default Deleting;

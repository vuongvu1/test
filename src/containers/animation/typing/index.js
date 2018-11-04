import React from 'react';
import PropsTypes from 'prop-types';

import './index.scss';

const Typing = (props) => {
  const { content } = props;

  return (
    <div className="wrapper">
      <h1>
        {content}
        <span>&nbsp;</span>
      </h1>
    </div>
  );
};

Typing.propTypes = {
  content: PropsTypes.string,
};

Typing.defaultProps = {
  content: 'HAPPY OUR FIRST YEAR ANNIVERSARY!!',
};

export default Typing;

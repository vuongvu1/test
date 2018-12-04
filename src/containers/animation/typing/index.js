import React from 'react';
// import PropsTypes from 'prop-types';

import './index.scss';

class Typing extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      content: 'HAPPY BIRTHDAY TO MỊ!!!',
      contentList: ['HAPPY BIRTHDAY TO MỊ!!!', 'HAPPY BIRTHDAY TO MỊ!!!', 'HAPPY BIRTHDAY TO MỊ!!!', '5', '6', '7'],
    };
  }

  setContent() {
    this.setState(prevState => ({
      content: prevState.contentList[Math.floor(Math.random() * prevState.contentList.length)],
    }));
  }

  render() {
    setInterval(() => {
      this.setContent();
    }, 6000);

    const { content } = this.state;

    return (
      <div className="type-wrapper">
        <h1>
          <span className="content">
            {content}
          </span>
          <span className="cursor">&nbsp;</span>
        </h1>
      </div>
    );
  }
}

// const Typing = (props) => {
//   const { content } = props;

//   return (
//     <div className="type-wrapper">
//       <h1>
//         {content}
//         <span>&nbsp;</span>
//       </h1>
//     </div>
//   );
// };

// Typing.propTypes = {
//   content: PropsTypes.string,
// };

// Typing.defaultProps = {
//   content: 'HAPPY OUR FIRST YEAR ANNIVERSARY!!',
// };

export default Typing;

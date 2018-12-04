import React from 'react';
// import PropsTypes from 'prop-types';

import './index.scss';

class Typing extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      content: 'HAPPY BIRTHDAY TO MỊ!!!',
      contentList: [
        'MỊ NUMBER 1 <3 <3',
        'TỦI MỚI NIỀM VUI MỚI',
        'WISH YOU HAVE A GREAT YEAR',
        'LETS TRAVEL THE WORLD TOGETHER',
        'MI <3 MEO',
        'Mèo thương mị số 1 lun á',
        'Mị hem đc tủi thân',
        'Mèo thiệt hạnh phúc',
        'Mị so ciu',
        'Mèo so happy to have Mị',
        'Mị đừng giận mèo nữa huhu',
        'M* nhún nhún',
        'love ya',
      ],
    };
  }

  componentDidMount() {
    setInterval(() => {
      this.setContent();
    }, 6000);
  }

  setContent() {
    this.setState(prevState => ({
      content: prevState.contentList[Math.floor(Math.random() * prevState.contentList.length)],
    }));
  }

  render() {
    const { content } = this.state;
    return (
      <div className="type-wrapper">
        <span className="content">
          {content}
        </span>
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

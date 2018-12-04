/* eslint-disable */

import React from 'react';
import PropsTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Timeline from './timeline';
import { updateTimeline } from '../../actions/timeline';
import Cloud from '../animation/cloud';
import Typing from '../animation/typing';
import Music from '../music';
import './index.scss';
import Deleting from '../animation/deleting';

const Homepage = (props) => {
  const { timeline, updateTimelineAction } = props;
  // <Timeline timeline={timeline} updateTimeline={updateTimelineAction} />
  // <Music
  //   url={timeline.backgroundMusicUrl}
  //   play={true}
  // />

  return (
    <div className="homepage">
      <iframe
        width='800'
        height='600'
        src='https://hlfc.matchat.online/embed/pjZJkIxua2'
        style={{ border: 'none', marginTop: 50 }}
        allowFullScreen>
      </iframe>
      <Typing content={timeline.title} />
      {/* <Deleting content={timeline.title} /> */}
      <Cloud />
    </div>
  );
};

// Homepage.propTypes = {
//   timeline: PropsTypes.string,
//   step: PropsTypes.number,
//   updateTimelineAction: PropsTypes.func, // eslint-disable-line
// };

// Homepage.defaultProps = {
//   timeline: '',
//   step: 0,
// };

const mapStateToProps = ({ timeline }) => ({
  timeline: timeline.current,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  updateTimelineAction: updateTimeline,
}, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Homepage);

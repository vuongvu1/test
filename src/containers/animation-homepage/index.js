import React from 'react';
import PropsTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Timeline from './timeline';
import { updateTimeline } from '../../actions/timeline';

const Homepage = (props) => {
  const { timeline, step, updateTimelineAction } = props;

  return (
    <div>
      Homepage:
      <Timeline timeline={timeline} step={step} updateTimeline={updateTimelineAction} />
    </div>
  );
};

Homepage.propTypes = {
  timeline: PropsTypes.string,
  step: PropsTypes.number,
  updateTimelineAction: PropsTypes.func, // eslint-disable-line
};

Homepage.defaultProps = {
  timeline: '',
  step: 0,
};

const mapStateToProps = ({ timeline }) => ({
  timeline: timeline.current,
  step: timeline.step,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  updateTimelineAction: updateTimeline,
}, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Homepage);

import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as viewActions from '../redux/actions/view';
import * as platformActions from '../redux/actions/platform';

class Platform extends Component {
  componentWillMount() {
    this.props.fetchPlatformStatistics(this.props.params.platform);
  }

  _renderProgressIndicator(isActive) {
    return (
      <div></div>
    );
  }

  render() {
    const { view } = this.props;
    const platformStatistics = this.props.platform.stats;
    const platformTotal = this.props.platform.total;

    return (
      <div class="stats-base">
        <h2>Platform</h2>
        { platformTotal }
      </div>
    )
  }
};

function mapStateToProps(state) {
  return {
    stats: state.stats,
    platform: state.platform,
    view: state.view
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    ...viewActions,
    ...platformActions
  },
  dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Platform);

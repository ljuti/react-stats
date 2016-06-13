import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import PlatformStats from '../components/PlatformStats.jsx'

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
    const platform = capitalize(this.props.params.platform);

    return (
      <div class="stats-base">
        <h2>Platform statistics for { platform }</h2>
        <PlatformStats statistics={ platformStatistics } />
        <p>
          Total: { platformTotal }
        </p>
        <Link to={ "/stats" }><button class="button">Back</button></Link>
      </div>
    )
  }
};

function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

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

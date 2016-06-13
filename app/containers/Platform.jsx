import React, { Component, PropTypes } from 'react';
import ReactTransitionGroup from 'react-addons-transition-group';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as viewActions from '../redux/actions/view';
import * as platformActions from '../redux/actions/platform';

class Platform extends Component {
  constructor() {
    super();
    this._handleResize = this._handleResize.bind(this);
  },

  _handleResize(e) {
    this.setState({ windowWidth: window.innerWidth });
  }

  componentWillMount() {
    this.props.fetchPlatformTotals();
  },

  componentDidMount() {
    window.addEventListener('resize', this._handleResize);
    this.setState({ windowWidth: window.innerWidth });
  },

  componentWillUnmount() {
    window.removeEventListener('resize', this._handleResize);
  },

  componentWillReceiveProps(nextProps) {
    if (this.props.stats.fetching && !nextProps.stats.fetching) {
      setTimeout(() => {
        this.props.fetchPlatformTotals(0)
      }, 10000);
    }
  },

  _renderProgressIndicator(isActive) {
    return (
      <div></div>
    );
  },

  render() {
    const { stats, view } = this.props;
    const progressIndicator = this._renderProgressIndicator(stats.fetching);

    return (
      <div class="stats-base">
        <h2>Platform</h2>
      </div>
    )
  }
};

function mapStateToProps(state) {
  return {
    stats: state.stats,
    view: state.view
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    ...viewActions,
    ...ticketActions
  },
  dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);

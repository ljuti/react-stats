import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import TotalStats from '../components/TotalStats.jsx';

import * as viewActions from '../redux/actions/view';
import * as statsActions from '../redux/actions/stats';
import * as platformActions from '../redux/actions/platform';

class Dashboard extends Component {
  constructor() {
    super();
  }

  componentWillMount() {
    this.props.fetchPlatformTotals();
  }

  componentDidMount() {
    this.setState({ windowWidth: window.innerWidth });
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.stats.fetching && !nextProps.stats.fetching) {
      setTimeout(() => {
        this.props.fetchPlatformTotals(0)
      }, 10000);
    }
  }

  render() {
    const { stats, view } = this.props;

    return (
      <div class="stats-base">
        <h2>Dashboard</h2>
        <TotalStats totals={ stats } />
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
    ...statsActions
  },
  dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);

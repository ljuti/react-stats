import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class App extends Component {
  constructor() {
    super();
  }

  render() {
    const { view } = this.props;
    return (
      <div>
        { this.props.children }
      </div>
    );
  }
};

function mapStateToProps(state) {
  return {
    view: state.view
  }
}

export default connect(mapStateToProps, null)(App);

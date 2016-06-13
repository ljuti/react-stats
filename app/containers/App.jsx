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
        <h1>Foo</h1>
      </div>
    );
  }
};

function mapStateToProps(state) {
  return {
    view: state.view
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

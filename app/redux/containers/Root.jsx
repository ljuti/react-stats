import React, { Component, PropTypes } from 'react';

export default class Root extends Component {
  render() {
    return (
      <div>
        <h1>Platform Statistics</h1>
      </div>
    );
  }
};

Root.propTypes = {
  store: PropTypes.object.isRequired
}

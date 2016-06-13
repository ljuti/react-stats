import React, { Component, PropTypes } from 'react';
import { Provider } from 'react-redux';
import createRoutes from '../routes';

export default class Root extends Component {
  render() {
    return (
      <Provider store={this.props.store}>
        <div>
          { createRoutes() }
        </div>
      </Provider>
    );
  }
};

Root.propTypes = {
  store: PropTypes.object.isRequired
}

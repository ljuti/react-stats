import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './redux/store/configureStore.jsx';
import Root from './containers/Root.jsx';
import injectTapEventPlugin from 'react-tap-event-plugin';

let store;

if (window.__INITIAL_STATE__) {
  store = configureStore(JSON.parse(unescape(window.__INITIAL_STATE__)));
} else {
  store = configureStore();
}

const rootElement = document.getElementById('content');

ReactDOM.render(
  <Root store={store} />,
  rootElement
);

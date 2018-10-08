import React from 'react';
import { hydrate } from 'react-dom';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import Loadable from 'react-loadable';

import App from '.';

const history = createBrowserHistory();
const target = document.getElementById('app');

class Main extends React.Component {
  render() {
    return (
      <Router history={history}>
        <App />
      </Router>
    );
  };
};

Loadable.preloadReady().then(() => {
  hydrate(<Main />, target);
});

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('service-worker.js');
  });
}
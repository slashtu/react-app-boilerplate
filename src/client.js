import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import { createStore } from './store';
import App from './App';

window.addEventListener('DOMContentLoaded', () => {
  const store = createStore();

  ReactDOM.render(
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>,
    document.getElementById('app')
  );
});

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    // navigator.serviceWorker.register('/sw.js');
  });
}

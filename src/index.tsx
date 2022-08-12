import React from 'react';
import ReactDOM from 'react-dom/client';

import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { postReducer } from './redux/reducers/postReducer';
import App from './App';
import './index.css';

// Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css';
// Bootstrap Bundle JS
import 'bootstrap/dist/js/bootstrap.bundle.min';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider>
      <App />
    </Provider>
  </React.StrictMode>
);

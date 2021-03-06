import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom'

import store from './Redux/store'

ReactDOM.render(
  <Router>
    <Provider store={store}>
      <App />
    </Provider >
  </Router>
  ,
  document.getElementById('root')
);

reportWebVitals();

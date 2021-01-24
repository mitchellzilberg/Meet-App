import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import reportWebVitals from './reportWebVitals';
import * as serviceWorker from './serviceWorker';
// import * as atatus from 'atatus-js';
import * as atatus from 'atatus-spa';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


serviceWorker.unregister();
atatus.config('259ee5e9bb574eb9b4abee9ee76ecacc').install();


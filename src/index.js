import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import * as vl from 'vega-lite-api';
import * as vega from 'vega';
import * as vegalite from 'vega-lite';
import {Handler} from 'vega-tooltip'

vl.register(vega,vegalite, {
  view: {renderer : 'svg'},
  init: view => {view.tooltip(new Handler().call)}
})


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

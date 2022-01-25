import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './firebase.js';
import App from './App.js';
//import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <BrowserRouter>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </BrowserRouter>,
  document.getElementById('root')
);

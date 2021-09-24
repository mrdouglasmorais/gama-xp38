import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Global from './GlobalStyles';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

ReactDOM.render(
  <React.StrictMode>
    <Global />
    <App />
    <ToastContainer />
  </React.StrictMode>,
  document.getElementById('root')
);

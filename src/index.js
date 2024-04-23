import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <ToastContainer position='bottom-left'   bodyStyle={{ fontSize: '1.8rem',
     backgroundColor: "var(--bg-color)" }}
      theme='dark'
      progressStyle={{ backgroundColor: "rgba(52, 152, 219) !important",
       color: 'var(--primary-color)'}}
      toastStyle={{ backgroundColor: "var(--bg-color)",}} />
  </React.StrictMode>
);
reportWebVitals();

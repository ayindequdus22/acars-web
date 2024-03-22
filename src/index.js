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
        <ToastContainer bodyStyle={{ fontSize: '1.8rem' }}

          progressStyle={{ backgroundColor: "var(--primary-color)", color: 'var(--primary-color)' }}
          toastStyle={{ backgroundColor: "var(--bg-color)", }} />
  </React.StrictMode>
);
reportWebVitals();

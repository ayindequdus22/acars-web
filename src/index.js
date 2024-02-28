import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import reportWebVitals from './reportWebVitals';
import store from './store/store';
import { BrowserRouter } from 'react-router-dom';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
        <ToastContainer bodyStyle={{ fontSize: '1.8rem' }}

          progressStyle={{ backgroundColor: "var(--primary-color)", color: 'var(--primary-color)' }}
          toastStyle={{ backgroundColor: "var(--bg-color)", }} />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
reportWebVitals();

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// import { Toaster } from 'react-hot-toast';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <Toaster position='top-center' reverseOrder={false} /> */}
    <App />
  </React.StrictMode>
);
reportWebVitals();

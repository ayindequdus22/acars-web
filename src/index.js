import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import reportWebVitals from './reportWebVitals';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import UserContentProvider from './utils/UserContext';
import './index.css';
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ToastContainer containerId="A" toastClassName="toastBody" className="toastContainer"
        position="bottom-right" style={{
          zIndex: 20
        }}
        limit={4}
        progressClassName="progressClass"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      <UserContentProvider>
        <App />
      </UserContentProvider>
    </QueryClientProvider >

  </React.StrictMode>
);
reportWebVitals();
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// import { Toaster } from 'react-hot-toast';
import reportWebVitals from './reportWebVitals';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
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

    {/* <Toaster position='top-center' reverseOrder={false} /> */}
    <App />
    </QueryClientProvider >

  </React.StrictMode>
);
reportWebVitals();

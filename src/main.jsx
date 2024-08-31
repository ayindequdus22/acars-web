import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { QueryClientProvider,QueryClient } from '@tanstack/react-query';
import App from './App';
import { ToastContainer } from 'react-toastify';
import UserContentProvider from './utils/UserContext';
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});
createRoot(document.getElementById('root')).render(
  <StrictMode>
<QueryClientProvider client={queryClient}>
      <ToastContainer toastClassName="toastBody" className="toastContainer"
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

        <App/>
      </UserContentProvider>
    </QueryClientProvider > 
     </StrictMode>,
)

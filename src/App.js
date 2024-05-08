import React, { createContext, useContext, useState } from 'react';
import { Provider } from 'react-redux';
import { createBrowserRouter, Outlet, RouterProvider, Navigate } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';

// External Dependencies
import './App.css';
import './fontawesome-free-6.5.1-web/fontawesome-free-6.5.1-web/css/all.css';

// Internal Dependencies
import store from './store/store';
import { Axios } from './utils/axios';
import { Footer } from './components/footer/Footer';
import Navbar from './components/navbar/Navbar';
import ShowlikedcontextProvider from './utils/showlikedcontext';

// Pages
import Home from './pages/home/Home';
import Register from './pages/register/Register';
import Cart from './pages/cart/Cart';
import Login from './pages/login/Login';
import Brands from './pages/brand/Brand';
import ComingSoon from './pages/soon/ComingSoon';

function App() {
  const { data: user, isLoading, error, isError } = useQuery({
    queryKey: ['authUser'],
    queryFn: async () => {
      try {
        const response = await Axios.get('/auth/myprofile');
        return response.data;
      } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
      }
    },
    retry: false,
  });

  const AuthenticatedRoute = ({ children }) => {
    return user ? children : <Navigate to="/login" />;
  };

  const router = createBrowserRouter([
    {
      path: '/',
      element: (
        <>
          <Navbar />
          <Outlet />
          <Footer />
        </>
      ),
      children: [
        {
          path: '/',
          element: <AuthenticatedRoute><Home /></AuthenticatedRoute>,
        },
        {
          path: '/coming-soon',
          element: <AuthenticatedRoute><ComingSoon /></AuthenticatedRoute>,
        },
        {
          path: '/brands',
          element: <AuthenticatedRoute><Brands /></AuthenticatedRoute>,
          children: [
            {
              path: '/brands/:id',
              element: <Brands />,
            },
          ],
        },
        {
          path: '/cart',
          element: <AuthenticatedRoute><Cart /></AuthenticatedRoute>,
        },
      ],
    },
    {
      path: '/login',
      element: user ? <Navigate to="/" /> : <Login />,
    },
    {
      path: '/register',
      element: user ? <Navigate to="/" /> : <Register />,
    },
  ]);

  return (
    <Provider store={store}>
      <ShowlikedcontextProvider>
        <RouterProvider router={router} />
      </ShowlikedcontextProvider>
    </Provider>
  );
}

export default App;

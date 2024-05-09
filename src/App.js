import './App.css';
import React, { createContext, useContext, useState } from 'react';
import './fontawesome-free-6.5.1-web/fontawesome-free-6.5.1-web/css/all.css';
import { Provider } from 'react-redux';
import store from './store/store';
import { createBrowserRouter, Outlet, RouterProvider, Navigate } from 'react-router-dom'; // Correct import
import Home from './pages/home/Home';
import Register from './pages/register/Register';
import Cart from './pages/cart/Cart';
import Navbar from './components/navbar/Navbar';
import Login from './pages/login/Login';
import Brands from './pages/brand/Brand';
import ComingSoon from './pages/soon/ComingSoon';
import ShowlikedcontextProvider from './utils/showlikedcontext';
import { Footer } from './components/footer/Footer';
import { Axios } from './utils/axios'; // Correct import
import { useQuery } from '@tanstack/react-query';

function App() {
  const { data: user, isLoading, error, isError } = useQuery({
    queryKey: ['authUser'],
    queryFn: async () => {
      try {
        const response = await Axios.get('/auth/myprofile', {
          // Additional options can be specified here
        });
        return response.data; // Assuming you want to return user data
      } catch (error) {
        console.error('Error fetching data:', error);
        throw error; // Rethrow the error to handle it outside
      }
    },
    retry: false,
  });
if (isLoading) {
  return "di loadin"
}const router = createBrowserRouter([
    {
      path: '/',
      element:

        <>
          <Navbar />
          <Outlet />
          <Footer />
        </>,

      children: [
        {
          path: '/',
          element: user ? (<Home />) : (
            <Navigate to="/login" />
          ),
        },
        {
          path: '/coming-soon',
          element:user ? ( <ComingSoon />) : (
            <Navigate to="/login" />
          ),
        },
        {
          path: '/brands',
          element:user ? (  <Brands />) : (
            <Navigate to="/login" />
          ),
          children: [
            {
              path: '/brands/:id',
              element: <Brands />,
            },
          ],
        },
        {
          path: '/cart',
          element: <Cart />,
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
    <>
      <Provider store={store}>
        <ShowlikedcontextProvider>
          <RouterProvider router={router} />
        </ShowlikedcontextProvider>
      </Provider>
    </>
  );
}

export default App;

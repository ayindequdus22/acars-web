import './App.scss';
import React, { lazy, Suspense, useContext } from "react";
import './fontawesome-free-6.5.1-web/fontawesome-free-6.5.1-web/css/all.css';
import { Provider } from 'react-redux';
import store from './store/store';
import { createBrowserRouter, Outlet, RouterProvider, Navigate, } from 'react-router-dom'; // Correct import
import Home from './pages/home/Home';
import Register from './pages/register/Register';
import Navbar from './components/navbar/Navbar';
import Login from './pages/login/Login';
import ShowlikedcontextProvider from './utils/showlikedcontext';
import { Footer } from './components/footer/Footer';
import Loader from './Loader';
import { userContext } from './utils/UserContext';
const Products = lazy(() => import('./pages/products/Products'));
const Cart = lazy(() => import('./pages/cart/Cart'));
const ComingSoon = lazy(() => import('./pages/soon/ComingSoon'));

function App() {
  const { data: user, isLoading } = useContext(userContext);
  if (isLoading) {
    return <Loader />
  }

  const router = createBrowserRouter([
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
          element: user ? (<ComingSoon />) : (
            <Navigate to="/login" />
          ),
        },
        {
          path: '/products',
          element: user ? (< Products />) : (
            <Navigate to="/login" />
          ),


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
      <Suspense fallback={<Loader />}>
        <Provider store={store}>
          <ShowlikedcontextProvider>
            <RouterProvider router={router} />
          </ShowlikedcontextProvider>

        </Provider>
      </Suspense>
    </>
  );
}

export default App;

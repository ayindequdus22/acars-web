import React, { useContext, lazy, Suspense } from "react";
import { Provider } from 'react-redux';
import store from './store/store';
import { createBrowserRouter, Outlet, RouterProvider, Navigate, } from 'react-router-dom';
 import { userContext } from './utils/UserContext';
import Navbar from './components/navbar/Navbar';
import ShowlikedcontextProvider from './utils/showlikedcontext';
import Loader from './Loader';
import { Footer } from './components/footer/Footer'
import './App.scss';

const Home = lazy(() => import('./pages/home/Home'));
const Register = lazy(() => import('./pages/register/Register'));
const Login = lazy(() => import('./pages/login/Login'));
const Products = lazy(() => import('./pages/products/Products'));
const Cart = lazy(() => import('./pages/cart/Cart'));
const ComingSoon = lazy(() => import('./pages/soon/ComingSoon'));

function App() {
  const { data: user, isLoading } = useContext(userContext);

  if (isLoading) {
    return <Loader />;
  }

  const router = createBrowserRouter([
    {
      path: '/',
      element:
        <>
          <Suspense fallback={<Loader />}>
          {user ?
           <>
            <Navbar />
            <Outlet />
            <Footer />
           </> : <Navigate to="/login" />}
          </Suspense>
        </>,

      children: [
        { path: '/', element: <Home /> },
        { path: '/coming-soon', element:<ComingSoon />},
        { path: '/products', element: <Products />},
        { path: '/cart', element: <Cart /> },
      ],
    },
    { path: '/login', element: user ? <Navigate to="/" /> : <Login /> },
    { path: '/register', element: user ? <Navigate to="/" /> : <Register /> },
  ]);

  return (
    <Suspense fallback={<Loader />}>
      <Provider store={store}>
        <ShowlikedcontextProvider>
          <RouterProvider router={router} />
        </ShowlikedcontextProvider>
      </Provider>
    </Suspense>
  );
}

export default App;

import './App.css';
import React, { createContext, useContext, useState } from 'react'
import './fontawesome-free-6.5.1-web/fontawesome-free-6.5.1-web/css/all.css';
import { Provider } from 'react-redux';
import store from './store/store';
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Home from './pages/home/Home'
import Register from './pages/register/Register'
import Cart from './pages/cart/Cart'
import Navbar from './components/navbar/Navbar'
import Login from './pages/login/Login';
import Brands from './pages/brand/Brand';
import ComingSoon from './pages/soon/ComingSoon';
import { QueryClient, QueryClientProvider, useQuery } from "@tanstack/react-query"
import ShowlikedcontextProvider from './utils/showlikedcontext';
const queryClient = new QueryClient();
function App() {

  const router = createBrowserRouter([
    {
      path: "/", errorElement: "Nigga stfu",
      element:
        <>
          <Navbar />
          <Outlet />
          <Footer />
        </>,
      children: [
        {
          path: "/", element: <Home />,
        },
        {
          path: "/coming-soon",
          element: <ComingSoon />
        },
        {
          path: "/brands",
          element: <Brands />,
          children: [
            {
              path: "/brands/:id",
              element: <Brands />,
            },
          ]
        },
        {
          path: "/cart",
          element: <Cart />,
        },
      ]
    },
    {
      path: "/login", element: <Login />,
    },
    {
      path: "/register",
      element: <Register />,
    },

  ]);

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Provider store={store}>
          {/* <AuthContextProvider> */}
            <ShowlikedcontextProvider>
              <RouterProvider router={router} />
              </ShowlikedcontextProvider>
          {/* </AuthContextProvider> */}
        </Provider>
      </QueryClientProvider>
    </>

  );
}
const Footer = () => {

  return (
    <section className="footer">

      <div className="box-container">

        <div className="box">
          <h3>about us</h3>
          <p>At A-Cars, we're dedicated to providing the highest quality cars and exceptional customer service. Explore our collection today.</p>
        </div>

        <div className="box">
          <h3>category</h3>
          <a href="#"> <i className="fas fa-arrow-right"></i> Cars </a>
          <a href="#"> <i className="fas fa-arrow-right"></i> Jeeps </a>
          <a href="#"> <i className="fas fa-arrow-right"></i> Trucks </a>
          <a href="#"> <i className="fas fa-arrow-right"></i> Buses </a>
          <a href="#"> <i className="fas fa-arrow-right"></i> new arrivals </a>
        </div>

        <div className="box">
          <h3>quick links</h3>
          <a href="#"> <i className="fas fa-arrow-right"></i> home </a>
          <a href="#"> <i className="fas fa-arrow-right"></i> Brands </a>
          <a href="#"> <i className="fas fa-arrow-right"></i> coming soon </a>
          <a href="#"> <i className="fas fa-arrow-right"></i> contact </a>
          <a href="#"> <i className="fas fa-arrow-right"></i> blogs </a>
        </div>

        <div className="box">
          <h3>extra links</h3>
          <a href="#"> <i className="fas fa-arrow-right"></i> my order </a>
          <a href="#"> <i className="fas fa-arrow-right"></i> my account </a>
          <a href="#"> <i className="fas fa-arrow-right"></i> my listing </a>
          <a href="#"> <i className="fas fa-arrow-right"></i> sell now </a>
          <a href="#"> <i className="fas fa-arrow-right"></i> new offers </a>
        </div>

      </div>

      <div className="share">
        <a href="#" className="fab fa-facebook-f"></a>
        <a href="#" className="fab fa-twitter"></a>
        <a href="#" className="fab fa-pinterest"></a>
        <a href="#" className="fab fa-linkedin"></a>
        <a href="#" className="fab fa-instagram"></a>
      </div>


    </section>


  )
}
export default App;





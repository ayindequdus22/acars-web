import './App.css';
import React, { createContext, useContext, useState } from 'react'
import './fontawesome-free-6.5.1-web/fontawesome-free-6.5.1-web/css/all.css';
import { Provider } from 'react-redux';
import store from './store/store';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from './pages/home/Home'
import Register from './pages/register/Register'
import Cart from './pages/cart/Cart'
import Navbar from './components/navbar/Navbar'
import Login from './pages/login/Login';
import Brands from './pages/brand/Brand';
import ComingSoon from './pages/soon/ComingSoon';
export const ShowLikedContext = createContext();

function App() {
const [show,setShow] = useState(false);

//  const display = useContext(showLikedContext);
// console.log(display)
  const router = createBrowserRouter([
    {
      path: "/", errorElement: "Nigga stfu",
      element: <Navbar />,
      children: [
        {
          path: "/", element: <Home />,
        },
        {
          path:"/coming-soon",
          element:<ComingSoon/>
        },
        {
          path: "/brands",
          element: <Brands />,
          children:[
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
        {
          path: "/login", element: <Login/>,
        },
        {
          path: "/register",
          element: <Register />,
        },

      ]
    },

  ]);

  return (
    <>
      <Provider store={store}>
      <ShowLikedContext.Provider value={{show,setShow}}>
        <RouterProvider router={router} />
        </ShowLikedContext.Provider>
      </Provider>
    </>
 
  );
}
export default App;

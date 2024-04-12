import './App.css';
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

function App() {

  const router = createBrowserRouter([
    {
      path: "/", errorElement: "Nigga stfu",
      element: <Navbar />,
      children: [
        {
          path: "/", element: <Home />,
        },
        {
          path:"/about",
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
        <RouterProvider router={router} />
      </Provider>
    </>
 
  );
}

export default App;

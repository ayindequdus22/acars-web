import './App.css';
import './fontawesome-free-6.5.1-web/fontawesome-free-6.5.1-web/css/all.css';
import { Provider } from 'react-redux';
 import store from './store/store';
import { BrowserRouter } from 'react-router-dom';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/home/Home'
import Register from './pages/register/Register'
import Cart from './pages/cart/Cart'
import Navbar from './components/navbar/Navbar'
import Login from './pages/login/Login';
import Brands from './pages/brand/Brand';
import { Suspense } from 'react';

function App() {
  return (
    <>
      <Provider store={store}>
        <BrowserRouter>
          <Suspense fallback={<div>
            <br></br> <br></br> <br></br>
            Loading</div>}>
            <Routes>
              <Route element={<Navbar />}>
                <Route path='/' element={<Home />} />
                <Route path='*' element={<>
                
                </>}/>
                <Route path='/brands' element={<Brands />} />
                <Route path='/cart' element={<Cart />} />
                <Route path='/register' element={<Register />} />
                <Route path='/login' element={<Login />} />
              </Route>
            </Routes>
          </Suspense>
        </BrowserRouter>
      </Provider>

    </>

  );
}

export default App;

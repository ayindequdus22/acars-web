import './App.css';
import './fontawesome-free-6.5.1-web/fontawesome-free-6.5.1-web/css/all.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/home/Home'
import Register from './pages/register/Register'
import Cart from './pages/cart/Cart'
import Navbar from './components/navbar/Navbar'
import Login from './pages/login/Login';
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        
        <Route path='/brands' element={"idhih"} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </>

  );
}

export default App;

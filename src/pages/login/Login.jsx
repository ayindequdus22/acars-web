import React, { useEffect, useRef, useState } from 'react'
import { Link,useNavigate } from 'react-router-dom'
import { PWD_REGEX, USER_REGEX } from '../../auth/regauth';
import { Axios } from '../../utils/axios';
import './login.scss'
import { useDispatch } from 'react-redux';
import { login as loginme } from '../../store/authSlice';
const Login = () => {
  const userRef = useRef();

  const [formObject, setFormObject] = useState({ user: '', pwd: '' });
  const { user, pwd } = formObject;
  const [validName, setValidName] = useState(false);
  const [validPwd, setValidPWd] = useState(false);
  const dispatch = useDispatch()
const navigate = useNavigate();
  useEffect(() => {
    userRef.current.focus();
  }, []) 


  useEffect(() => {
    const result = USER_REGEX.test(user);
    setValidName(result)
  }, [user])

  useEffect(() => {
    const result = PWD_REGEX.test(pwd);
    setValidPWd(result);
  }, [pwd])


  const handleSubmit = async (e) => {
    e.preventDefault();
    const checkUserAgain = USER_REGEX.test(user);
    const checkPwdAgain = PWD_REGEX.test(pwd);
    if (!checkPwdAgain || !checkUserAgain) {
      // console.log({user,pwd})
//  useDispatch(login)
dispatch(loginme({user,pwd}))
    }
    else {
      alert("Input valid values")
    };
  }
  return (
    <form onSubmit={(e)=>handleSubmit(e)} className='loginForm dfAc'>

      <div className="loginContainer fldc">
        <div className="fldc usPcP">
          <div>
            <input type="email"
              ref={userRef} autoComplete='off' required
              onChange={(e) => setFormObject({ ...formObject, user: e.target.value })}
              placeholder='E-mail' />
          </div>
          <div>
            <input type="password" placeholder='Password' required 
              onChange={(e) => setFormObject({ ...formObject, pwd: e.target.value })}
            />
          </div>
          <div>
          </div>
        </div>
        <div className='df-jsb reg'>
          <Link to={'/register'}>Register Now</Link>
          <Link to={'/register'}>Forgot Password</Link>
        </div>
        <div className="btnContainer" >
          <button type='submit'
            className="btn">Login</button>
        </div>
        <div style={{ padding: '1rem 0 2rem 0' }}>
          <p>Or Login With</p>
        </div>
        <div className="continuation fldc-jc">
          <button type='button' className='df-ac'><div className="fab fa-facebook-square"></div><div>Facebook</div> </button>
          <button type='button' className='df-ac gmail'><div className="fab fa-google"></div> <div>Google</div> </button>
          <button type='button' className='df-ac twitter'><div className="fab fa-twitter-square"></div><div>Twitter</div></button>
        </div>
      </div>

    </form>
  )
}

export default Login
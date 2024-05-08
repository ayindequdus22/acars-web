import React, { useEffect, useRef, useState } from 'react'
import { Link,useNavigate } from 'react-router-dom'
import { Axios } from '../../utils/axios';
import './login.scss'
import { useMutation,useQueryClient } from '@tanstack/react-query';
function Login() {

  const queryClient = useQueryClient();
  const userRef = useRef();

  const [formObject, setFormObject] = useState({ user: '', pwd: '' });
  const { user, pwd } = formObject;

  const navigate = useNavigate();
  useEffect(() => {
    userRef.current.focus();
  }, []);


  const { mutate, isError, isPending, error } = useMutation({
    mutationFn: async ({email,password }) => {
      try {
        const res = await Axios.post("/auth/login", { email: user, password: pwd });
        console.log(res);
        if (res.status !== 200) {
          throw new Error("Smth went wrong");
        }
        navigate("/");
      } catch (error) {
        console.log(error);
      }
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["authUser"] });
 
    },
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    mutate({ email: user, password: pwd });
  };
  return (
    <form onSubmit={(e) => handleSubmit(e)} className='loginForm dfAc'>

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
              onChange={(e) => setFormObject({ ...formObject, pwd: e.target.value })} />
          </div>
          <div>
          </div>
        </div>
        <div className='df-jsb reg'>
          <Link to={'/register'}>Register Now</Link>
          <Link to={'/register'}>Forgot Password</Link>
        </div>
        <div className="btnContainer">
          <button type='submit'
            className="btn">Login {isPending && "Pending"} {error} </button>
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
  );
}

export default Login
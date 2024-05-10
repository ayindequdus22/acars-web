import React from 'react'
import { Link,useNavigate } from 'react-router-dom'
import { Axios } from '../../utils/axios';
import { useForm } from 'react-hook-form';
import './login.scss'
import { useMutation,useQueryClient } from '@tanstack/react-query';
function Login() {

  const queryClient = useQueryClient();
  const { register, handleSubmit, formState: { errors } } = useForm();

  const navigate = useNavigate();
 

  const { mutate, isError, isPending, error } = useMutation({
    mutationFn: async ({email,password }) => {
      try {
        const res = await Axios.post("/auth/login", { email, password});
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

  const onSubmit = async (data) => {
    const { email, password } = data;
    mutate({ email, password });
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)} className='loginForm dfAc'>

      <div className="loginContainer fldc">
        <div className="fldc usPcP">
          <div>
            <input type="text"  
               autoComplete='off' required
              {...register("email", {
                required: "Please enter your email",
                pattern: {
                  value: /^\S+@\S+$/i,
                  message: 'Invalid email address',
                },
                validate:(value)=>{
                  if(!value.endsWith(".com")){
                  return  "Invalid email address"
                  }
                }
              })}
              placeholder='E-mail' />
               {errors.email && (
            <div className="errorContainer">
               <p>
              {errors.email.message}
            </p>
            </div>
           )}
          </div>
          <div>
            <input type="password" placeholder='Password' required   {...register("password", {
              required: "Please enter your password.",minLength: {
                value: 8,
                message: "Password must have atleast 8-20 characters"
              }, maxLength: {
                value: 20,
                message: "Password must have atleast 8-20 characters"
              }
            })}  autoComplete='false'
            />
            {errors.password && (
            <div className="errorContainer">
               <p>
              {errors.password.message}
            </p>
            </div>
           )}
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
            className="btn">Login
             {/* {isPending && "Pending"} {error} */}
              </button>
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
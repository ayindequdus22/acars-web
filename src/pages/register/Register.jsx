import React, { useRef } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form';
import { Axios } from '../../utils/axios';
import './Register.scss'
import { useMutation, useQueryClient } from '@tanstack/react-query';

const Register = () => {
  const validatePassword = (value) => {
    if (!/(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[\W_])/.test(value)) {
      return "Password must contain at least one lowercase letter, one uppercase letter, one digit, and one special character.";
    }
    return true;
  };
  const queryClient = useQueryClient();
  const { register, handleSubmit, formState: { errors }, watch } = useForm();

  const password = useRef({});
  password.current = watch("password", "");
  const navigate = useNavigate();


  const { mutate, isError, isPending, error } = useMutation({
    mutationFn: async ({ username, email, password }) => {
      try {
        const res = await Axios.post("/auth/register", { username, email, password });
        if (res.statusText !== "Created") {
          throw new Error("Smth went wrong");
        }
        navigate("/login")
      } catch (error) {
        console.log(error)
      }
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["authUser"] });

    },
  })

  const onSubmit = (data) => {
    const { username, email, password } = data;
    mutate({ username, email, password })
  };

  return (
    <>
      <form className="registerFormContainer dfAc" onSubmit={handleSubmit(onSubmit)}>
        <div className="registerForm fldc">
          <div className="namesInput2">
            <input
              type="text"
              {...register("username", {
                required: "Please enter your username",
                minLength: {
                  value: 4,
                  message: "Username must have at least 8 characters",
                },
                maxLength: {
                  value: 20,
                  message: "Username must have at most 20 characters",
                },
              })}
              placeholder="Username"
            />
            {errors.username && (
              <div className='errorContainer'>
                <p>{errors.username.message}</p>
              </div>
            )}
          </div>
          <div className="namesInput2">
            <input
              type="email"
              {...register("email", {
                required: "Please enter your email address",
                pattern: {
                  value: /^\S+@\S+$/i,
                  message: 'Invalid email address',
                },
                validate: (value) => {
                  if (!value.endsWith(".com")) {
                    return "Invalid email address";
                  }
                },
              })}
              placeholder="E-mail"
              required
            />
            {errors.email && (
              <div className='errorContainer'>
                <p>{errors.email.message}</p>
              </div>
            )}
          </div>
          <div className="">
            <input
              type="password"
              {...register("password", {
                required: "Please enter your password.",
                minLength: {
                  value: 8,
                  message: "Password must have at least 8 characters",
                },
                maxLength: {
                  value: 20,
                  message: "Password must have at most 20 characters",
                }, validate: validatePassword

              })}
              placeholder="Password"
              autoComplete='false'
            />
            {errors.password && (
              <div className="errorContainer">
                <p>{errors.password.message}</p>
              </div>
            )}
          </div>
          <div className="">
            <input
              type="password"
              {...register("confirmPassword", {
                required: "Please confirm your password.",
                validate: (value) =>
                  value === password.current || "The passwords do not match.",
              })}
              placeholder="Confirm Password"
              autoComplete='off'
              required
            />
            {errors.confirmPassword && (
              <div className="errorContainer">
                <p>{errors.confirmPassword.message}</p>
              </div>
            )}
          </div>
          <div className="btnContainer">
            <button className="btn">Register</button>
          </div>
          <div>
            <p>or</p>
          </div>
          <div className="continuation fldc-jc">
            <Link to={"/login"} className='loginLink' 
            // style={{ textAlign: "right", padding: "0",color:"red" }}
            >Login</Link>
            <button className='df-ac'>
              <div className="fab fa-facebook-square"></div>
              <div>Facebook</div>
            </button>
            <button className='df-ac gmail'>
              <div className="fab fa-google"></div>
              <div>Google</div>
            </button>
            <button className='df-ac twitter'>
              <div className="fab fa-twitter-square"></div>
              <div>Twitter</div>
            </button>
          </div>
        </div>
      </form>
    </>
  );
};

export default Register;

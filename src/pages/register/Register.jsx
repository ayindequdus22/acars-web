import React, { useEffect, useRef, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
// import { PWD_REGEX, USER_REGEX } from '../../auth/regauth';
import { Axios } from '../../utils/axios'; import './Register.scss'
import { useMutation, useQueryClient } from '@tanstack/react-query';
const Register = () => {
  const userRef = useRef();

  const queryClient = useQueryClient();
  const [formObject, setFormObject] = useState({ userName: "", email: "", pwd: "", matchpwd: "" });
  const { userName, email, pwd, matchpwd } = formObject;
  const navigate = useNavigate();
  useEffect(() => {
    userRef.current.focus();
  }, [])

  const { mutate, isError, isPending, error } = useMutation({
    mutationFn: async () => {
      try {
        const res = await Axios.post("/auth/register", { username:userName, email, password:pwd });

        if (res.statusText !== "Created") {
          throw new Error("Smth went wrong");
        }
        navigate("/login")
      } catch (error) {
        console.log(error)
      }
    },
    onSuccess: () => {
      // toast.success("Account created successfully");

      queryClient.invalidateQueries({ queryKey: ["authUser"] });

    },
  })

  const handleSubmit = async (e) => {
    mutate()
    e.preventDefault();
  }
  return (
    <>
      <form className="registerFormContainer dfAc" onSubmit={(e) => handleSubmit(e)}>
        <div className="registerForm fldc">

          <div className="namesInput2">
            <input type="text" ref={userRef} required onChange={(e) => setFormObject({ ...formObject, userName: e.target.value })} placeholder="User Name" />
          </div>
          <div className="namesInput2">
            <input type="email" placeholder="E-mail" required onChange={(e) => setFormObject({ ...formObject, email: e.target.value })} />
          </div>
          <div className="">
            <input type="password" placeholder="Password" required autoComplete='false' onChange={(e) => setFormObject({ ...formObject, pwd: e.target.value })} />

          </div>
          <div className="">

            <input type="password" placeholder="Confirm Password" required onChange={(e) => setFormObject({ ...formObject, matchpwd: e.target.value })} />
          </div>
          <div className="btnContainer">
            {isPending ? "User Account is being created" : ""}
            <button className="btn">Register</button>
          </div>
          <div>
            {" "}
            <p>or</p>
          </div>

          <div className="continuation fldc-jc">
            {/* <div className="loginLink " style={{display:'flex',justifyContent:"flex-end"}}> */}
            <Link to={"/login"} style={{ textAlign: "right", padding: "0" }}>Login</Link>
            {/* </div>     */}
            <button className='df-ac'>
              <div className="fab fa-facebook-square"></div>
              <div>Facebook</div> </button>
            <button className='df-ac gmail'><div className="fab fa-google"></div> <div>Google</div> </button>
            <button className='df-ac twitter'><div className="fab fa-twitter-square"></div><div>Twitter</div></button>
          </div>
        </div>


      </form>
    </>
  );
};

export default Register;

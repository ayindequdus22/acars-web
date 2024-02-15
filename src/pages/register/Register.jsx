import React from "react";
import './Register.scss'
const Register = () => {
  return (
    <>
      <form action="" className="registerFormContainer dfAc">
        <div className="registerForm fldc">
          <div className="namesInput">
            <input type="text" placeholder="First Name" />
          </div>
          <div className="namesInput2">
            <input type="text" placeholder="Last Name" />
          </div>
          <div className="namesInput2">
            <input type="text" placeholder="E-mail" />
          </div>
          <div className="">
            <input type="password" placeholder="Password" />

          </div>
            <div className="">

            <input type="password" placeholder="Confirm Password" />
          </div>
          <div className="btnContainer">
            <button className="btn">Register</button>
          </div>
          <div>
            {" "}
            <p>or</p>
          </div>
          <div className="continuation fldc-jc">
            <button className='df-ac'><div className="fab fa-facebook-square"></div><div>Facebook</div> </button>
            <button className='df-ac'><div className="fab fa-google"></div> <div>Google</div> </button>
            <button className='df-ac'><div className="fab fa-twitter-square"></div><div>Twitter</div></button>
          </div>
        </div>


      </form>
    </>
  );
};

export default Register;

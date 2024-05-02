import React, { useContext, useEffect, useRef, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { PWD_REGEX, USER_REGEX } from '../../auth/regauth';
import { Axios } from '../../utils/axios'; import './Register.scss'
// import { AuthContext } from '../../utils/authContext';
const Register = () => {
  const userRef = useRef();
// const useMe = {
//   name:"ole",
//   api:"host"
// }
// const {currentUser,setCurrentUser} = useContext(AuthContext);
// const text = ()=>{
//   localStorage.setItem("user",JSON.stringify(useMe))
// }
// text()
const [formObject, setFormObject] = useState({ userName: "", email: "", pwd: "", matchpwd: "" });
  const { userName, email, pwd, matchpwd } = formObject;
  const [validName, setValidName] = useState(false);
  const [validPwd, setValidPWd] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    userRef.current.focus();
  }, [])


  useEffect(() => {
    const result = USER_REGEX.test(userName);
    setValidName(result)
  }, [userName])
  useEffect(() => {
    const result = PWD_REGEX.test(pwd);
    setValidPWd(result);
  }, [pwd])
  const handleSubmit = async (e) => {
    e.preventDefault();
    const checkUserAgain = USER_REGEX.test(userName);
    const checkPwdAgain = PWD_REGEX.test(pwd);
    if (!checkPwdAgain || !checkUserAgain) {
      console.log({userName,pwd})
     try {
      // "shola@gmail.com""12345678"
      const response = await Axios.post("/auth/register", { userName:userName,email: email, password: pwd }, { withCredentials: true })
console.log(response)
      if(response.status == 200){
navigate("/")

      }
    } catch (err) { console.log(err) }
    }
    else {
      alert("Input valid values")
    };
  }
  return (
    <>
      <form className="registerFormContainer dfAc"  onSubmit={(e)=>handleSubmit(e)}>
        <div className="registerForm fldc">

          <div className="namesInput2">
            <input type="text" ref={userRef}  required onChange={(e) => setFormObject({ ...formObject, userName: e.target.value })} placeholder="User Name" />
          </div>
          <div className="namesInput2">
            <input type="email" placeholder="E-mail" required onChange={(e) => setFormObject({ ...formObject, email: e.target.value })} />
          </div>
          <div className="">
            <input type="password" placeholder="Password" required onChange={(e) => setFormObject({ ...formObject, pwd: e.target.value })} />

          </div>
          <div className="">

            <input type="password" placeholder="Confirm Password" required onChange={(e) => setFormObject({ ...formObject, matchpwd: e.target.value })} />
          </div>
          <div className="btnContainer">
            <button className="btn">Register</button>
          </div>
          <div>
            {" "}
            <p>or</p>
          </div>
          
          <div className="continuation fldc-jc">
          {/* <div className="loginLink " style={{display:'flex',justifyContent:"flex-end"}}> */}
            <Link to={"/login"} style={{textAlign:"right",padding:"0"}}>Login</Link>
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

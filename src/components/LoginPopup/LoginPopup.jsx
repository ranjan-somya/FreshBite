import React, { useState } from 'react'
import './LoginPopup.css'
import { assets } from '../../assets/assets';
const LoginPopup = ({setShowLogin}) => {
const [currentState,setcurrentState]=useState("Sign Up");

  return (
    <div className='login-popup'>
        
      <form action="" className="login-popup-container">
        <div className="login-popup-title">
            <h2>{currentState}</h2>
            <img onClick={()=>setShowLogin(false)} src={assets.cross_icon} alt="" />
        </div>
        <div className="login-popup-inputs">
            {currentState==="Login"?<></>:<input type="text" placeholder='Your name' required id="" />}
            
            <input type="email" placeholder='Your mail' required id="" />
            <input type="password" placeholder='password' required id="" />
        </div>
        <button>{currentState==='Sign Up'?"create account":"Login"}</button>
        <div className="login-popup-condition">
            <input type="checkbox" required  />
            <p>by continuing i agree to the term of use and privacy policy . </p>
        </div>
        {currentState==='Login'
        ?<p>Create a new account ? <span onClick={()=>setcurrentState("Sign Up")}>Click here</span></p>
        :<p>already have account ? <span onClick={()=>setcurrentState("Login")}>Login here</span></p>
         }
        
      </form>
    </div>
  )
}

export default LoginPopup

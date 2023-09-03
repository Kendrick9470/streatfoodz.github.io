import React from 'react'
import Navbar from '../Components/Navbar'
import { useState} from 'react';
import RegistrationPopup from '../Components/RegistrationPopup';
import ForgotPasswordPopup from '../Components/ForgotPasswordPopup';

function Login() {
  const [buttonPopup, setButtonPopup]= useState(false); 
  const [buttonPopup2, setButtonPopup2]= useState(false); 


  

  return (
    <div>
      <ForgotPasswordPopup  className='popin' trigger={buttonPopup2} setTrigger={setButtonPopup2}>
        <h3>Reset Password</h3>
        <form>
          <input type='email,number' placeholder='Enter your user ID e.g Email or Mobile No'></input>
          <input className='checkbox' type='checkbox'></input><span className='checkbox-p'><h6>Send One Time Pass (OTP) To My Registered Mobile No</h6></span>
          <button className='OTP-btn'>Send OTP Code</button>
        </form>

      </ForgotPasswordPopup>
      <RegistrationPopup className='pop' trigger={buttonPopup} setTrigger={setButtonPopup}>
        <h3>Create account</h3>
        <form>
          <input className='reg-input' type='text' placeholder='Your name'></input>
          <input className='reg-input' type='number' placeholder='Mobile no for OTP'></input>
          <input className='reg-input' type='email' placeholder='Email'></input>
          <input className='reg-input' type='text,number' placeholder='Address'></input>
          <input className='reg-input' type='text' placeholder='Postcode'></input>
          <input className='reg-input' type='number' placeholder='Password'></input>
          <button className='reg-btn'>Create account</button>

        </form>
      </RegistrationPopup>
        <Navbar/>
        <div className='login-img-div'>
     <img className='login-img' src='/images/bg.png' alt=''></img>
        </div>
        <div className='login-form'>
            <p>Please Login to continue...</p>
            <form>
                <input className='login-user' type='text' placeholder='USER ID '></input>
                <input className='login-input2' type='text' placeholder='PASSWORD '></input>
                <p className='logp2'>Note: you should only save password on trusted devices.</p>
                <button className='login-btn' type='button'><img className='login2-img' src='/images/login2.PNG'></img>Login</button>
                <p className='logp3'><span onClick={()=> setButtonPopup2(true)}>Forgot password ?</span> |<span onClick={()=> setButtonPopup(true)}>Not registered ? </span> </p>
            </form>

        </div>
        <div className='login-footer'>
        <p className='contact-footer'>&copy;2023 The <span>S</span><span className='brand-name-color-green'>tr</span><span className='brand-name-color-yellow'>eat</span><span>f</span><span className='brand-name-color-red'>oo</span><span>d</span><span className='brand-name-color-red'>z</span> website is maintained by <a href='https://www.exatechhub.com'>Exatechhub developers team</a></p>

        </div>

    </div>
  )
}

export default Login
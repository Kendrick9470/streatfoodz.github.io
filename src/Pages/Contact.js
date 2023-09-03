import React from 'react'
import Navbar from '../Components/Navbar'
import {useState} from "react"

function Contact() {
    

    
  return (
    <div>
        <Navbar/>
        <div className='contact-info'>
            <ul>
            <img className='contact-img' src='/images/contact.PNG' alt=''></img><li>Contact</li>
            <img className='private2-img4' src='/images/private2.PNG' alt=''></img><li>About Cookies</li>
                <img className='terms-img3' src='/images/terms.PNG' alt=''></img><li>Term of use</li>
                <img className='contact-img2' src='/images/privacy.PNG' alt=''></img> <li>Privacy policy</li>
            </ul>
        </div>
        <div className='form2-div'>
        <p className='form-p1'>Contact us</p>
            <p className='form-p2'>Please complete all fields and send message.</p>
            <form className='contact-form'>
                <input className='form-input' type="text" placeholder='Your name'></input>
                <input className='form-input2' type="text" placeholder='Email address'></input>
                <input className='form-input3' type="text" placeholder='Phone number'></input>
                <textarea className='form-textarea' placeholder='Your message*'></textarea>
                <button className='form-btn' type='button'>Send Message</button>

            </form>
       
        </div>
        <div className='contact-footer'>
        
        <p className='contact-footer'>&copy;2023 The <span>S</span><span className='brand-name-color-green'>tr</span><span className='brand-name-color-yellow'>eat</span><span>f</span><span className='brand-name-color-red'>oo</span><span>d</span><span className='brand-name-color-red'>z</span> website is maintained by Exatechhub developers team reach us @<a href='mailto:exatech09@gmail'>exatech09@gmail.com</a></p>
        
        </div>

    </div>
  )
}

export default Contact